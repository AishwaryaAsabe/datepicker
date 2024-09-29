import connectDb from '../lib/connectDb';
import Recurrence from '../lib/models/RecurrencePattern';

export default async function handler(req, res) {
  await connectDb();

  if (req.method === 'GET') {
    try {
      const recurrences = await Recurrence.find({});
      return res.status(200).json(recurrences);
    } catch (error) {
      return res.status(500).json({ error: 'Error fetching recurrence patterns' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
