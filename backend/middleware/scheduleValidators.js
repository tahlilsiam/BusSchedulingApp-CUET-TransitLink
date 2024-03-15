const { check, validationResult } = require("express-validator");

exports.scheduleValidator = [
  check("day")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Day is missing")
    .isIn([
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ])
    .withMessage("Invalid day"),

  check("shift")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Shift is missing")
    .isIn(["1st", "2nd", "3rd"])
    .withMessage("Invalid shift"),

  check("busType")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Bus type is missing")
    .isIn(["student", "teacher", "staff"])
    .withMessage("Invalid bus type"),

  check("busName").trim().not().isEmpty().withMessage("Bus name is missing"),
];

exports.svalidate = (req, res, next) => {
  const error = validationResult(req).array();

  if (error.length) {
    return res.status(401).json({ error: error[0].msg });
  }
  next();
};
