import nc from 'next-connect';
import db from '../../../utils/db';
import Shelf from '../../../models/Shelf';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const shelf = await Shelf.find({});
  await db.disconnect();
  res.send(shelf);
});

export default handler;
