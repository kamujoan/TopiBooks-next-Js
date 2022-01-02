import mongoose from 'mongoose';
const motivationalSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    price: { type: String, required: true },
    photo: { type: String, required: true },
    epub: { type: String, required: true },
    pdf: { type: String, required: true },
    inStock: { type: Number, required: true, default: 0 },
    desc: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Motivational =
  mongoose.models.Motivational || mongoose.model('Motivational', motivationalSchema);

export default Motivational;
