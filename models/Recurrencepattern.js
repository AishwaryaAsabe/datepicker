import mongoose from 'mongoose';

const RecurrenceSchema = new mongoose.Schema({
  startDate: {
    type: Date,
    required: true,
  },
  endDate: Date,
  recurrencePattern: {
    type: String,
    enum: ['daily', 'weekly', 'monthly', 'yearly'],
    required: true,
  },
  customInterval: {
    type: Number,
    default: 1,
  },
  daysOfWeek: [Number], // For specific weekdays (e.g., [1, 2] = Monday, Tuesday)
});

export default mongoose.models.Recurrence || mongoose.model('Recurrence', RecurrenceSchema);
