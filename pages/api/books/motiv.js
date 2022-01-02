import nc from 'next-connect';
import db from '../../../utils/db';
import Motivational from '../../../models/Motivational';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const motivational = await Motivational.find({});
  await db.disconnect();
  res.send(motivational);
});

export default handler;
