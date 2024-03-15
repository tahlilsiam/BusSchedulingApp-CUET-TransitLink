const express = require("express");
const { getSchedule } = require("../controller/getSchedule");
const { getBusInfo } = require("../controller/getBusInfo");
const { getNotice } = require("../controller/getNotice");

const router = express.Router();

router.get("/schedule", getSchedule);
router.get("/bus", getBusInfo);
router.get("/notice", getNotice);

module.exports = router;
