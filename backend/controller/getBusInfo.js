const Bus = require("../modals/businfo"); // Adjust the path as needed

exports.getBusInfo = async (req, res) => {
  try {
    const busData = await Bus.find();
    res.json(busData);
  } catch (error) {
    console.error("Error fetching schedule data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
