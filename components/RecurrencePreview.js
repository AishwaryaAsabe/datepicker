'use client';

import React from 'react';
import useRecurrenceStore from '../store/recurrenceStore';

const RecurrencePreview = () => {
  const { startDate, customInterval } = useRecurrenceStore();

  // Early return if the necessary data is not available
  if (!startDate || customInterval === null) return null; // Ensure you check customInterval as well

  // Simple logic for previewing future dates
  const getNextDates = () => {
    const dates = [];
    for (let i = 1; i <= 5; i++) {
      const nextDate = new Date(startDate);
      nextDate.setDate(nextDate.getDate() + customInterval * i);
      dates.push(nextDate.toLocaleDateString());
    }
    return dates;
  };

  return (
    <div className="mt-4">
      <h3 className="text-md font-bold">Preview Next Dates:</h3>
      <ul className="list-disc ml-6 mt-2">
        {getNextDates().map((date, idx) => (
          <li key={idx}>{date}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecurrencePreview;
