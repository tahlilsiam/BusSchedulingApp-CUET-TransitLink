/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import Spinner from "../components/spinner";
import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import DayTripDetails from "./DayTripDetails";

const ShowBus = () => {
  const [bus, setBus] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/buses/${id}`)
      .then((response) => {
        setBus(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar("Error", { variant: "error" });
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-8y mx-auto font-bold text-center">
        Show Bus Information
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-800 font-bold"> Id:</span>
            <span>{bus._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-800 font-bold">Driver Name:</span>
            <span>{bus.staffName?.driverName}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-800 font-bold"> Helper Name:</span>
            <span>{bus.staffName?.helperName}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-800 font-bold"> Bus No.:</span>
            <span>{bus.busNumber}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-800 font-bold"> Bus Name:</span>
            <span>{bus.busName}</span>
          </div>


          <div className="my-4">
            <span className="text-xl mr-4 text-gray-800 font-bold">Saturday Trip:</span>
            <DayTripDetails trips={[bus.tripSat1, bus.tripSat2, bus.tripSat3]} />
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-800 font-bold">Sunday Trip:</span>
            <DayTripDetails trips={[bus.tripSun1, bus.tripSun2, bus.tripSun3]} />
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-800 font-bold">Monday Trip:</span>
            <DayTripDetails trips={[bus.tripMon1, bus.tripMon2, bus.tripMon3]} />
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-800 font-bold">Tuesday Trip:</span>
            <DayTripDetails trips={[bus.tripTue1, bus.tripTue2, bus.tripTue3]} />
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-800 font-bold">Wednesday Trip:</span>
            <DayTripDetails trips={[bus.tripWed1, bus.tripWed2, bus.tripWed3]} />
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-800 font-bold">Thursday Trip:</span>
            <DayTripDetails trips={[bus.tripThu1, bus.tripThu2, bus.tripThu3]} />
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-800 font-bold"> Create Time</span>
            <span>{new Date(bus.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-800 font-bold">Last Update Time</span>
            <span>{new Date(bus.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBus;
