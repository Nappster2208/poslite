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
