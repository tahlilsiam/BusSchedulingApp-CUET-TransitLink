import express from "express";
import { Bus } from "../models/busModel.js";
const router = express.Router();

// Route for save a new bus
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.staffName ||
      !request.body.busNumber||
      !request.body.busName
    ) {
      return response.status(400).send({
        message: "Send All fields: Staff name, Bus number, Bus name",
      });
    }
    const newBus = {
      staffName: {
        driverName:request.body.staffName.driverName,
        helperName:request.body.staffName.helperName
      },
      busNumber: request.body.busNumber,
      busName: request.body.busName,
    
    };
    const days = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
    days.forEach(day => {
        for (let i = 1; i <= 3; i++) {
            const tripFieldName = `trip${day}${i}`;
            const requestBodyField = request.body[tripFieldName];
            if (requestBodyField) {
                newBus[tripFieldName] = {
                    tripType: requestBodyField.tripType,
                    startTime: requestBodyField.startTime,
                    endTime: requestBodyField.endTime
                };
            } else {
                newBus[tripFieldName] = {
                    tripType: undefined,
                    startTime: undefined,
                    endTime: undefined
                };
            }
        }
    });

    
    const bus = await Bus.create(newBus);
    return response.status(200).send(bus);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route to get all bus from database

router.get("", async (request, response) => {
  try {
    const buses = await Bus.find({});
    return response.status(200).send({
      count: buses.length,
      data: buses,
    });
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

//Get one bus from database by it's id

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const bus = await Bus.findById(id);
    return response.status(200).send(bus);
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

// Route for update a bus
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.staffName ||
      !request.body.busNumber||
      !request.body.busName
    ) {
      return response.status(400).send({
        message: "Send All fields: Staff Name, Bus Number, Bus Name",
      });
    }
    const { id } = request.params;
    const result = await Bus.findByIdAndUpdate(id, request.body);
    if (!result) {
      return response.status(400).send({ message: "Bus Schedule not found" });
    }
    return response.status(200).send({ message: "Bus Schedule updated successfully" });
    } catch (error) {
      console.log(error.message);
      return response.status(500).send({ message: error.message });
    }
});

//Delete a bus from database
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Bus.findByIdAndDelete(id);
    if (!result) {
      return response.status(400).send({ message: "Bus is not found" });
    }
    return response.status(200).send({ message: "Bus Schedule deleted successfully" });
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

export default router;