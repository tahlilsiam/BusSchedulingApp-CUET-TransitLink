const Schedule = require("../modals/scheduleInfo");

exports.scheduleInfo = async (req, res) => {
  try {
    const { day, shift, busType, busName } = req.body;
    const newSchedule = new Schedule({ day, shift, busType, busName });

    await newSchedule.save();

    res.json(newSchedule);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
