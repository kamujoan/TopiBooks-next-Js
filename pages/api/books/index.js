import nc from 'next-connect'
import db from '../../../utils/db'
import Book from '../../../models/Book';

const handler = nc()

handler.get(async(req, res) => {
    await db.connect()
    const books = await Book.find({})
    await db.disconnect()
    res.send(books)
})

export default handler