/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// TripInputFields.jsx
import React from 'react';

const InputField = ({ label, value, onChange, placeholder }) => (
  <div className='my-4'>
    <label className='text-xl mr-4 text-gray-500'>{label}</label>
    <input
      type='text'
      value={value}
      onChange={onChange}
      className='border-2 border-gray-400 px-4 py-2 w-full'
      placeholder={placeholder}
    />
  </div>
);

const TripInputFields = ({ day, tripType, busData, handleInputChange }) => (
  <>
    <InputField
      label={`${day} Trip ${tripType} Type`}
      value={busData[`trip${day}${tripType}`].tripType}
      onChange={(e) => handleInputChange(e, `trip${day}${tripType}`, 'tripType')}
      placeholder={`Enter ${day} trip ${tripType} type`}
    />

    <InputField
      label={`${day} Trip ${tripType} Start Time`}
      value={busData[`trip${day}${tripType}`].startTime}
      onChange={(e) => handleInputChange(e, `trip${day}${tripType}`, 'startTime')}
      placeholder={`Enter ${day} trip ${tripType} start time`}
    />

    <InputField
      label={`${day} Trip ${tripType} End Time`}
      value={busData[`trip${day}${tripType}`].endTime}
      onChange={(e) => handleInputChange(e, `trip${day}${tripType}`, 'endTime')}
      placeholder={`Enter ${day} trip ${tripType} end time`}
    />
  </>
);

export default TripInputFields;
