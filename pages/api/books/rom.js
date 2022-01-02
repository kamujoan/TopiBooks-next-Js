import nc from 'next-connect';
import db from '../../../utils/db';
import Romance from '../../../models/Romance';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const romance = await Romance.find({});
  await db.disconnect();
  res.send(romance);
});

export default handler;
