const Bus = require("../modals/businfo");

exports.busInfo = async (req, res) => {
  try {
    // Assuming your bus information has fields like busname, busno, drivername, and helpername
    const { busname, busno, drivername, helpername } = req.body;

    // Create a new Bus instance
    const newBusInfo = new Bus({ busname, busno, drivername, helpername });

    // Save the new bus information to the database
    await newBusInfo.save();

    // Respond with the created bus information
    res.json(newBusInfo);
  } catch (error) {
    // Handle errors, and send an error response
    res.status(500).json({ error: error.message });
  }
};
