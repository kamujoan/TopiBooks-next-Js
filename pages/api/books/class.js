import nc from 'next-connect';
import db from '../../../utils/db';
import Classics from '../../../models/Classics';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const classics = await Classics.find({});
  await db.disconnect();
  res.send(classics);
});

export default handler;
