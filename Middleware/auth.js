"use strict";

const jwt = require("jsonwebtoken");

const withAnyAuth = async (req, res, next) => {
    //Authenticate with API Key
    if(req.headers.apikey) {
        req.user = {
            APIKey: req.headers.apikey //check if API key is valid -- TODO (Go through db and check if key exists)
        }
        next();
        return;
    }

    //Authenticate with JWT
    const token = req.body.token ||
        req.query.token ||
        req.headers["x-access-token"] ||
        req.cookies.token;

    if (!token) return res.status(401).send("Authentification Error").end();
    else {
        var verified = 0;
        await jwt.verify(token, "AdminSecret", (err, decoded) => {
            if (err) verified += 1;
            else {
                req.user = decoded.user;
                next();
            }
        });
        await jwt.verify(token, "NonAdminSecret", (err, decoded) => {
            if (err) verified += 1;
            else {
                req.user = decoded.user;
                next();
            }
        });
        if(verified === 2) res.status(401).send("Not authorized!").end();
    }
};

const withAdminAuth = async(req, res, next) => {
        //Authenticate with API Key
        if(req.headers.apikey) {
            req.user = {
                APIKey: req.headers.apikey //check if API key is valid
            }
            next();
            return;
        }
    
        //Authenticate with JWT
        const token = req.body.token ||
            req.query.token ||
            req.headers["x-access-token"] ||
            req.cookies.token;
    
        if (!token) return res.status(401).send("Not authorized!").end();
        else {
            await jwt.verify(token, "AdminSecret", (err, decoded) => {
                if (err) res.status(401).send("Not authorized!").end();
                else {
                    req.user = decoded.user;
                    next();
                }
            });
        }
}

module.exports = [withAnyAuth, withAdminAuth];