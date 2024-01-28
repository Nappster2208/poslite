import mongoose from "mongoose";

const { Schema, Types } = mongoose;

const subCategory2Schema = new Schema({
  subcatId: {
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

export default mongoose.models.r_subCategories2 ||
  mongoose.model("r_subCategories2", subCategory2Schema);
