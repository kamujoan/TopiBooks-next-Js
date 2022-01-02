import nc from 'next-connect';
import db from '../../../utils/db';
import Dystopian from '../../../models/Dystopian';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const dystopian = await Dystopian.find({});
  await db.disconnect();
  res.send(Dystopian);
});

export default handler;
