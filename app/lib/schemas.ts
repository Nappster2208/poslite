import * as yup from "yup";

export const categorySchema = yup.object().shape({
  catName: yup.string().min(3).max(20).required(),
  catDesc: yup.string().min(3).max(100).required(),
});
export const subcategorySchema = yup.object().shape({
  catId: yup.string(),
  subcatName: yup.string().min(3).max(20).required(),
  subcatDesc: yup.string().min(3).max(100).required(),
});
export const subcategory2Schema = yup.object().shape({
  subcatId: yup.string(),
  subcatName: yup.string().min(3).max(20).required(),
  subcatDesc: yup.string().min(3).max(100).required(),
});
