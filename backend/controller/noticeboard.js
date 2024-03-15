const Notice = require("../modals/notice");

exports.noticeboard = async (req, res) => {
  try {
    const { title, attachment } = req.body;
    const newNotice = new Notice(title, attachment);
    await newNotice.save();
    res.json(newNotice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
