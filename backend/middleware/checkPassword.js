const passwordSchema = require("../models/password");
module.exports = (req, res, next) => {
  if (!passwordSchema.validate(req.body.password)) {
    res.writeHead(
      400,
      '{"message":"Mot de passe requis : 10 caractères minimun. Au moins 1 Majuscule, 1 minuscule."}',
      {
        "content-type": "application/json",
      }
    );
    res.end("Format de mot de passe incorrect");
  } else {
    next();
  }
};
