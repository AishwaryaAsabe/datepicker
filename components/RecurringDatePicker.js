'use client';

import React from 'react';
import CustomDatePicker from './DatePicker';
import RecurrenceOptions from './RecurrenceOptions';
import RecurrenceCustomization from './RecurrenceCustomization';
import RecurrencePreview from './RecurrencePreview';
import useRecurrenceStore from '../store/recurrenceStore'; // Import your Zustand store

const RecurringDatePicker = () => {
  // Accessing state from Zustand store
  const {
    startDate,
    endDate,
    recurrencePattern,
    customInterval,
    daysOfWeek,
  } = useRecurrenceStore();

  const handleSave = async () => {
    const recurrenceData = {
      startDate,
      endDate,
      recurrencePattern,
      customInterval,
      daysOfWeek,
    };

    try {
      const response = await fetch('/api/saveRecurrence', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recurrenceData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Recurrence saved successfully:', result);
      } else {
        console.error('Failed to save recurrence');
      }
    } catch (error) {
      console.error('Error saving recurrence:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg">
      <CustomDatePicker />
      <RecurrenceOptions />
      <RecurrenceCustomization />
      <RecurrencePreview />
      <button
        onClick={handleSave}
        className="mt-4 bg-blue-500 text-white p-2 rounded"
      >
        Save Recurrence
      </button>
    </div>
  );
};

export default RecurringDatePicker;
