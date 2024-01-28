const mongoose = require("mongoose");
const { Schema } = mongoose;

const scheduleSchema = new Schema({
  day: {
    type: String,
    enum: [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ],
    required: true,
  },
  shift: {
    type: String,
    enum: ["1st", "2nd", "3rd"],
    required: true,
  },
  busType: {
    type: String,
    enum: ["student", "teacher", "staff"],
    required: true,
  },
  busName: {
    type: String,
    required: true,
  },
});

const InfoModel = mongoose.model("scheduleInfo", scheduleSchema);

module.exports = InfoModel;
