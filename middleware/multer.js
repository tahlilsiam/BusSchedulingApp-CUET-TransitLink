const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Set your desired destination folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original filename
  },
});

const fileFilter = (req, file, cb) => {
  if (!file.mimetype.includes("application")) {
    return cb("Invalid  attachment format!", false);
  }
  cb(null, true);
};

module.exports = multer({ storage, fileFilter });
