/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const DayTripDetails = ({ trips }) => {
  return (
    <div className="flex justify-between">
      {trips.map((trip, index) => (
        <span key={index}>
          {trip ? (
            <div className="flex flex-col">
              <div className="font-bold">{trip.tripType}</div>
              <div >
                {trip.startTime} - {trip.endTime}
              </div>
            </div>
          ) : (
            <div className="font-bold"> -</div>
          )}
        </span>
      ))}
    </div>
  );
};

export default DayTripDetails;
