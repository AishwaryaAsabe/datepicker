import connectDb from '../../lib/connectDb'; // Adjust the import path as needed
import Recurrence from '../../lib/models/RecurrencePattern'; // Adjust the model path as needed

export default async function handler(req, res) {
  await connectDb();

  if (req.method === 'POST') {
    try {
      const { startDate, endDate, recurrencePattern, customInterval } = req.body;

      const newRecurrence = new Recurrence({
        startDate,
        endDate,
        recurrencePattern,
        customInterval,
      });

      await newRecurrence.save();
      res.status(201).json({ message: 'Recurrence saved successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to save recurrence', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
