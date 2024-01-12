import mongoose from "mongoose";

const { Schema, Types } = mongoose;

const subCategorySchema = new Schema(
  {
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
  },
  { timestamps: true }
);

export default mongoose.models.r_subCategories ||
  mongoose.model("r_subCategories", subCategorySchema);
