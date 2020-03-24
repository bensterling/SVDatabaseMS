"use strict";

const jwt = require("jsonwebtoken");

const withAuth = (req, res, next) => {
    const token = req.body.token ||
        req.query.token ||
        req.headers["x-access-token"] ||
        req.cookies.token;

    if (!token) return res.status(401).json({ message: "Authentification Error" });
    else {
        jwt.verify(token, "Secret", (err, decoded) => {
            if (err) res.status(401).send("Unauthorized, Invalid token");
            else {
                req.forum = decoded.forum;
                next();
            }
        })
    }
};

module.exports = withAuth;