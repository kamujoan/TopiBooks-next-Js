import nc from 'next-connect';
import db from '../../utils/db';
import Book from '../../models/Book';
import data from '../../utils/data';
import Romance from '../../models/Romance';
import Dystopian from '../../models/Dystopian';
import Classics from '../../models/Classics';
import Motivational from '../../models/Motivational';
import Kids from '../../models/Kids';
import All from '../../models/All';
import Shelf from '../../models/Shelf';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await Book.deleteMany();
  await Romance.deleteMany();
  await Dystopian.deleteMany();
  await Classics.deleteMany();
  await Motivational.deleteMany();
  await Kids.deleteMany();
  await All.deleteMany();
  await Shelf.deleteMany();
  await Book.insertMany(data.books);
  await Romance.insertMany(data.romance);
  await Dystopian.insertMany(data.dystopian);
  await Classics.insertMany(data.classics);
  await Motivational.insertMany(data.motivational);
  await Kids.insertMany(data.kids);
  await All.insertMany(data.all);
  await Shelf.insertMany(data.shelf);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
});

export default handler;
