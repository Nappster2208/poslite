// models/Category.ts
import mongoose, { Document, Schema } from "mongoose";

export interface CategoryDocument extends Document {
  name: string;
  description: string;
}

const categorySchema = new Schema<CategoryDocument>({
  name: { type: String, required: true },
  description: { type: String, required: false },
});

const Category = mongoose.model<CategoryDocument>("Category", categorySchema);

export default Category;
