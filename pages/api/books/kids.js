import nc from 'next-connect';
import db from '../../../utils/db';
import Kids from '../../../models/Kids';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const kids = await Kids.find({});
  await db.disconnect();
  res.send(kids);
});

export default handler;
