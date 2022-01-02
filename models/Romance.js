import mongoose from 'mongoose';
const romanceSchema = new mongoose.Schema(
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

const Romance = mongoose.models.Romance || mongoose.model('Romance', romanceSchema);

export default Romance;
