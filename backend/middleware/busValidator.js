const { check, validationResult } = require("express-validator");

exports.busValidator = [
  check("busname").trim().not().isEmpty().withMessage("Bus name is required"),
  check("busno").trim().not().isEmpty().withMessage("Bus number is required"),
  check("drivername")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Driver name is required"),
  check("helpername")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Helper name is required"),
];

exports.bvalidate = (req, res, next) => {
  const error = validationResult(req).array();
  if (error.length) {
    return res.status(401).json({ error: error[0].msg });
  }
  next();
};
