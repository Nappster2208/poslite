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

export const supplierSchema = yup.object().shape({
  code: yup.string().required("Kode supplier harus di isi"),
  name: yup.string().required("Nama supplier harus di isi"),
  logo: yup.lazy((value) => {
    if (value === null || typeof value === "undefined") {
      return yup.mixed().nullable();
    }

    return yup
      .mixed()
      .test("size", "File terlalu besar, maksimum 2 MB", function (fileValue) {
        const file = fileValue as File;
        return !file || file.size <= 2 * 1024 * 1024;
      })
      .test("type", "Format tidak didukung", function (fileValue) {
        const file = fileValue as File;
        return (
          !file ||
          ["image/png", "image/jpg", "image/jpeg"].includes(file.type || "")
        );
      });
  }),
  // address: yup.string().required("Alamat harus di isi"),
  // email: yup.string().email("Format email tidak valid").nullable(),
  // telp: yup
  //   .string()
  //   .matches(
  //     /^\+?[0-9]*$/,
  //     "No telp / HP harus berupa angka dan dapat di mulai dengan karakter +"
  //   )
  //   .nullable(),
});

export type supplierSchemaType = yup.InferType<typeof supplierSchema>;
