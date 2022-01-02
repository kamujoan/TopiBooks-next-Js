import mongoose from 'mongoose'
const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  price: { type: String, required: true },
  photo: { type: String, required: true },
  epub: { type: String, required: true },
  pdf: { type: String, required: true },
  inStock: { type: Number, required: true, default: 0 },
  desc: { type: String, required: true },
}, {
    timestamps: true
});

const Book = mongoose.models.Book || mongoose.model('Book', bookSchema)

export default Book;