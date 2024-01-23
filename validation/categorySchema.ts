import { supplierSchema } from "@/app/lib/schemas";
import * as yup from "yup";

export const categorySchema = yup
  .object({
    Name: yup.string().min(3).max(20).required(),
    Description: yup.string().min(3).max(100).required(),
  })
  .required();

export type categorySchemaType = yup.InferType<typeof categorySchema>;

export const subcategorySchema = yup
  .object({
    Name: yup.string().min(3).max(20).required(),
    Description: yup.string().min(3).max(100).required(),
  })
  .required();

export type subcategorySchemaType = yup.InferType<typeof subcategorySchema>;
