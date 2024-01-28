import mongoose from "mongoose";

const { Schema } = mongoose;

const supplierSchema = new Schema({
  code: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  logo: {
    fileName: {
      type: String,
    },
    filePath: {
      type: String,
    },
  },
  address: {
    type: String,
  },
  email: {
    type: String,
  },
  telp: {
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

export default mongoose.models.supplier ||
  mongoose.model("supplier", supplierSchema);
