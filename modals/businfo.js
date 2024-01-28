const mongoose = require("mongoose");

const busInfoSchema = new mongoose.Schema({
  busname: {
    type: String,
    required: true,
  },
  busno: {
    type: String,
    required: true,
    unique: true,
  },
  drivername: {
    type: String,
    required: true,
  },
  helpername: {
    type: String,
    required: true,
  },
});

const BusInfo = mongoose.model("BusInfo", busInfoSchema);

module.exports = BusInfo;
