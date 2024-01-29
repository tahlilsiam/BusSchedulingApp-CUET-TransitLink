const Notice = require("../modals/notice"); // Adjust the path as needed

exports.getNotice = async (req, res) => {
  try {
    const NoticeData = await Notice.find();
    res.json(NoticeData);
  } catch (error) {
    console.error("Error fetching schedule data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
