import connectDb from '../../lib/connectDb';
import RecurrenceModel from '../../models/RecurrenceModel';

export default async function handler(req, res) {
  await connectDb();
  
  if (req.method === 'POST') {
    try {
      const newRecurrence = await RecurrenceModel.create(req.body);
      res.status(201).json(newRecurrence);
    } catch (error) {
      res.status(400).json({ error: 'Failed to save recurrence data' });
    }
  }
}
