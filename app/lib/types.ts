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
