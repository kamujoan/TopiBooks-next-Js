import mongoose from 'mongoose';
const kidsSchema = new mongoose.Schema(
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

const Kids=
  mongoose.models.Kids || mongoose.model('Kids', kidsSchema);

export default Kids;
