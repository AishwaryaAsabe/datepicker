'use client';

import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useRecurrenceStore from '../store/recurrenceStore';

const CustomDatePicker = () => {
  const { startDate, setStartDate, endDate, setEndDate } = useRecurrenceStore();

  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-lg font-bold mb-2">Select Date Range</h2>
      <div className="flex space-x-4">
        <div>
          <label>Start Date:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="border p-2 rounded"
          />
        </div>
        <div>
          <label>End Date:</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="border p-2 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomDatePicker;
