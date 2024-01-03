import { ReactNode } from "react";

export interface Link {
  name: string;
  href: string;
  icon?: ReactNode;
  submenu?: Link[];
}

export interface SubCategories {
  _id: {
    $oid: string;
  };
  subcatName: string;
  subcatDesc: string;
}
