import nc from 'next-connect';
import db from '../../../utils/db';
import Book from '../../../models/Book';
import Romance from '../../../models/Romance';
import Dystopian from '../../../models/Dystopian';
import Classics from '../../../models/Classics';
import Motivational from '../../../models/Motivational';
import Kids from '../../../models/Kids';
import All from '../../../models/All';
import Shelf from '../../../models/Shelf';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const book = await Book.findById(req.query.id);
  const romance = await Romance.findById(req.query.id);
  const dystopian = await Dystopian.findById(req.query.id);
  const classics = await Classics.findById(req.query.id);
  const motivational = await Motivational.findById(req.query.id);
  const kids = await Kids.findById(req.query.id);
  const all = await All.findById(req.query.id);
  const shelf = await Shelf.findById(req.query.id);
  await db.disconnect();
  res.send(book, romance, dystopian, shelf, all, classics, motivational, kids );
});

export default handler;
