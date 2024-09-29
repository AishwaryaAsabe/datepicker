import React, { useEffect } from 'react';
import useRecurrenceStore from '../store/recurrenceStore';

const RecurrenceCustomization = () => {
  const { startDate, setStartDate, customInterval, setCustomInterval } = useRecurrenceStore();

  useEffect(() => {
    if (!startDate) {
      setStartDate(new Date().toISOString());
    }
  }, [startDate, setStartDate]);

  return (
    <div className="mt-4">
      <label>Custom Interval:</label>
      <input
        type="number"
        className="border p-2 rounded ml-2"
        value={customInterval}
        onChange={(e) => setCustomInterval(Number(e.target.value))}
      />
      <span> (e.g., every X days/weeks)</span>
    </div>
  );
};

export default RecurrenceCustomization;
