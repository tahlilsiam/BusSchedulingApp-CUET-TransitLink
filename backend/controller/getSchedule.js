const Schedule = require("../modals/scheduleInfo"); // Adjust the path as needed

exports.getSchedule = async (req, res) => {
  try {
    const scheduleData = await Schedule.find();
    res.json(scheduleData);
  } catch (error) {
    console.error("Error fetching schedule data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
