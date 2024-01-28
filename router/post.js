const express = require("express");
const { scheduleInfo } = require("../controller/schedule");
const { noticeboard } = require("../controller/noticeboard");
const { busInfo } = require("../controller/bus");
const multer = require("../middleware/multer");
const {
  scheduleValidator,
  svalidate,
} = require("../middleware/scheduleValidators");
const { noticeValidator, nvalidate } = require("../middleware/noticeValidator");

const router = express.Router();

router.post("/scheduleinfo", scheduleValidator, svalidate, scheduleInfo);
router.post(
  "/noticeboard",
  multer.single("attachement"),
  noticeValidator,
  nvalidate,
  noticeboard
);
router.post("/businfo", busInfo);

module.exports = router;
