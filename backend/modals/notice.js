const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    default: "admin",
  },
  attachment: {
    type: Object,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const notice = mongoose.model("notice", noticeSchema);

module.exports = notice;
