// List of helper functions

const sanitizeInputs = async function(req, res, apiKeySchema, reqSchema) {
  const apiKeyCheck = apiKeySchema.validate(req.user);
  if (apiKeyCheck.error) {
    res
      .status(400)
      .json({ error: apiKeyCheck.error })
      .end();
    return -1;
  }

  if (reqSchema) {
    const reqSchemaCheck = reqSchema.validate(req.body);
    if (reqSchemaCheck.error) {
      res
        .status(400)
        .json({ error: reqSchemaCheck.error })
        .end();
      return -2;
    }
  }

  return 0;
};

module.exports = sanitizeInputs;
