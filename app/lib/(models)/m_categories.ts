import mongoose from "mongoose";

const { Schema } = mongoose;

const categorySchema = new Schema(
  {
    catName: {
      type: String,
      required: true,
    },
    catDesc: {
      type: String,
    },
    subCategory: {
      subcatName: { type: String },
      subcatDesc: { type: String },
    },
  },
  { timestamps: true }
);

export default mongoose.models.r_categories ||
  mongoose.model("r_categories", categorySchema);
