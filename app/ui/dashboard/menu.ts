import Link from "next/link";
import {
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  TagIcon,
  ScaleIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { SubmenuLink } from "@/app/lib/types";

type Link = {
  name: string;
  href: string;
  icon: React.ElementType<any>;
  submenu?: SubmenuLink[];
};

export const links: Link[] = [
  { name: "Home Page", href: "/dashboard", icon: HomeIcon },
  {
    name: "Products",
    href: "/dashboard/products",
    icon: ClipboardDocumentListIcon,
  },
  {
    name: "Tools",
    href: "",
    icon: Cog6ToothIcon,
    // submenu: [
    //   {
    //     name: "Categories",
    //     href: "/dashboard/tools/categories",
    //     icon: TagIcon,
    //   },
    //   { name: "Units", href: "/dashboard/tools/units", icon: ScaleIcon },
    // ],
  },
];
