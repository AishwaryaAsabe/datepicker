import React from 'react';
import useRecurrenceStore from '../store/recurrenceStore';

const RecurrenceOptions = () => {
  const { recurrencePattern, setRecurrencePattern } = useRecurrenceStore(); // Use setRecurrencePattern instead

  return (
    <div className="flex flex-col space-y-2">
      <h2 className="text-md font-semibold">Recurrence Pattern</h2>
      <select
        className="border p-2 rounded"
        value={recurrencePattern}
        onChange={(e) => setRecurrencePattern(e.target.value)} // Correct function name
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
};

export default RecurrenceOptions;
