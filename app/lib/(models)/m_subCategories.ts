import mongoose from "mongoose";

const { Schema, Types } = mongoose;

const subCategorySchema = new Schema({
  catId: {
    type: Types.ObjectId,
    required: true,
  },
  subcatName: {
    type: String,
    required: true,
  },
  subcatDesc: {
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

export default mongoose.models.r_subCategories ||
  mongoose.model("r_subCategories", subCategorySchema);
