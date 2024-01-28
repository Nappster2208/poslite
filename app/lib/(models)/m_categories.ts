import mongoose from "mongoose";

const { Schema } = mongoose;

const categorySchema = new Schema({
  catName: {
    type: String,
    required: true,
  },
  catDesc: {
    type: String,
  },
  tanggal: {
    type: String,
  },
  createdAt: {
    type: String,
  },
  updatedAt: {
    type: String,
  },
  deletedAt: {
    type: String,
  },
});

export default mongoose.models.r_categories ||
  mongoose.model("r_categories", categorySchema);
