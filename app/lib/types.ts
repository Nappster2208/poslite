import { ObjectId } from "mongoose";
import { ReactNode } from "react";

export interface Link {
  name: string;
  href: string;
  icon?: ReactNode;
  submenu?: Link[];
}

export interface SubCategories {
  _id: { $oid: string };
  subcatName: string;
  subcatDesc: string;
  subCategory2: string[];
}

export interface Categories {
  _id: {
    $oid: string;
  };
  catName: string;
  catDesc: string;
  subCategory: string[];
}

export type SubmenuLink = {
  name: string;
  href: string;
  icon: React.ElementType<any>;
};

export type SubCategoryType = {
  subcatName: string;
  subcatDesc: string;
  _id: string;
};

export type ResponseError = {
  message: string;
};

export type CategoryType = {
  _id: string;
  catName: string;
  catDesc: string;
  subCategory: Object[];
};
