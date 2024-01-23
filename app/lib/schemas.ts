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

interface FileWithSize extends File {
  size: number;
  type: string;
}

export const supplierSchema = yup.object().shape({
  code: yup.string().required("Kode supplier harus di isi"),
  name: yup.string().required("Nama supplier harus di isi"),
  logo: yup
    .mixed()
    .nullable()
    .test("size", "File terlalu besar, maksimum 2 MB", function (value) {
      const fileValue = value as FileWithSize | null;
      if (!fileValue) return true;
      return fileValue.size <= 2 * 1024 * 1024;
    })
    .test("type", "Format tidak didukung", function (value) {
      const fileValue = value as FileWithSize | null;
      if (!fileValue) return true;
      return ["image/png", "image/jpg", "image/jpeg"].includes(
        fileValue.type || ""
      );
    }),
  address: yup.string().required("Alamat harus di isi"),
  email: yup.string().email("Format email tidak valid").nullable(),
  telp: yup
    .string()
    .matches(
      /^\+?[0-9]*$/,
      "No telp / HP harus berupa angka dan dapat di mulai dengan karakter +"
    )
    .nullable(),
});

export type supplierSchemaType = yup.InferType<typeof supplierSchema>;
