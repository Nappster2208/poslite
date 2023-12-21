import { ReactNode } from "react";

export interface Link {
  name: string;
  href: string;
  icon?: ReactNode;
  submenu?: Link[];
}
