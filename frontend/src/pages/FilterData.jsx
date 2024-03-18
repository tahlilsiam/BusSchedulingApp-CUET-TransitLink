/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/spinner";
import axios from "axios";
import { useSnackbar } from "notistack";
import FilterForm from "./FilterForm";

const FilterData = () => {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  async function filterDataByDayAndTrip(day, tripType) {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://busschedulingapp-cuet-transitlink-3.onrender.com/buses`
      );
      let responseData = response.data.data;

      // Check if the response is not empty
      if (
        responseData &&
        typeof responseData === "object" &&
        Object.keys(responseData).length > 0
      ) {
        const filteredData = Object.values(responseData).filter((bus) => {
          // Loop over trip1, trip2, trip3
          for (let i = 1; i <= 3; i++) {
            const tripKey = `trip${day}${i}`;
            if (bus[tripKey] && bus[tripKey].tripType === tripType) {
              return true;
            }
          }
          return false;
        });
        setBuses(filteredData);
        setLoading(false);
      } else {
        // If the response is empty or not an object, set buses to an empty array
        setBuses([]);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error filtering data:", error);
      enqueueSnackbar("Error", { variant: "error" });
      setLoading(false);
    }
  }

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-8y mx-auto font-bold text-center">
        Filtered Bus Information
      </h1>
      <FilterForm onSubmit={filterDataByDayAndTrip} />
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          {buses.map((bus) => (
            <div key={bus._id} className="my-4">
              <div>
                <span className="text-xl mr-4 text-gray-800 font-bold">
                  Bus Name:
                </span>
                <span>{bus?.busName}</span>
              </div>
              <div>
                <span className="text-xl mr-4 text-gray-800 font-bold">
                  Start Time:
                </span>
                <span>{bus?.tripSat1?.startTime}</span>
              </div>
              <div>
                <span className="text-xl mr-4 text-gray-800 font-bold">
                  End Time:
                </span>
                <span>{bus?.tripSat1?.endTime}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterData;
