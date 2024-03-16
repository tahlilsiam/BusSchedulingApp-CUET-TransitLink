/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const FilterForm = ({ onSubmit }) => {
  const [day, setDay] = useState('');
  const [tripType, setTripType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(day, tripType);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center my-4">
      <div className="flex flex-col mr-4">
        <label htmlFor="day" className="text-xl text-gray-800 font-bold mb-2">Day:</label>
        <input
          type="text"
          id="day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          placeholder="Enter day"
          className="border-2 border-gray-400 px-4 py-2"
        />
      </div>
      <div className="flex flex-col mr-4">
        <label htmlFor="tripType" className="text-xl text-gray-800 font-bold mb-2">Trip Type:</label>
        <input
          type="text"
          id="tripType"
          value={tripType}
          onChange={(e) => setTripType(e.target.value)}
          placeholder="Enter trip type"
          className="border-2 border-gray-400 px-4 py-2"
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md">
        Filter Buses
      </button>
    </form>
  );
};

export default FilterForm;
