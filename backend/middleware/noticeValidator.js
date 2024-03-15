const { check, validationResult } = require("express-validator");

exports.noticeValidator = [
  check("title").trim().not().isEmpty().withMessage("Title is missing"),
];

exports.nvalidate = (req, res, next) => {
  const error = validationResult(req).array();
  if (error.length) {
    return res.status(401).json({ error: error[0].msg });
  }
  next();
};
