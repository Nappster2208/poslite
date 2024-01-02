import * as yup from "yup";

export const categorySchema = yup
  .object({
    catName: yup.string().min(3).max(20).required(),
    catDesc: yup.string().min(3).max(100).required(),
  })
  .required();

export type categorySchemaType = yup.InferType<typeof categorySchema>;

export const subcategorySchema = yup
  .object({
    subcatName: yup.string().min(3).max(20).required(),
    subcatDesc: yup.string().min(3).max(100).required(),
  })
  .required();

export type subcategorySchemaType = yup.InferType<typeof subcategorySchema>;
