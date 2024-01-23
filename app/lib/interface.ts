import { Types } from "mongoose";

export interface CategoryData {
  catName: string;
  catDesc: string;
}

export interface SubCategoryData {
  catId: Types.ObjectId;
  subcatName: string;
  subcatDesc: string;
}

export interface SubCategory2Data {
  subcatId: Types.ObjectId;
  subcatName: string;
  subcatDesc: string;
}

export interface SupplierData {
  code: string;
  name: string;
  logo: File;
  address: string;
  email: string;
  telp: string | number;
}
