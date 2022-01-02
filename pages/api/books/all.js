import nc from 'next-connect';
import db from '../../../utils/db';
import All from '../../../models/All';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const all = await All.find({});
  await db.disconnect();
  res.send(all);
});

export default handler;
