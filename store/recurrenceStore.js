import create from 'zustand';

const useRecurrenceStore = create((set) => ({
  recurrencePattern: 'daily',
  customInterval: 1,
  startDate: null,
  endDate: null,
  setRecurrencePattern: (pattern) => set({ recurrencePattern: pattern }),
  setCustomInterval: (interval) => set({ customInterval: interval }),
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
}));

export default useRecurrenceStore;
