import mongoose from "mongoose";

const { Schema } = mongoose;

const menuSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    href: {
      type: String,
    },
    icon: { type: String },
    submenu: [
      {
        name: { type: String },
        href: { type: String },
        icon: { type: String },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.menus || mongoose.model("menus", menuSchema);
