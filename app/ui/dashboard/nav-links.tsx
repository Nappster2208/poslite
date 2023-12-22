"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import {
  HomeIcon,
  CogIcon,
  TagIcon,
  ScaleIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline"; // Change the icon imports as needed
import { usePathname } from "next/navigation";

interface NavLink {
  name: string;
  href: string;
  icon: React.ElementType<any>; // Change this to React.ComponentType
  hasSubmenu?: boolean; // Make hasSubmenu optional
  submenu?: NavLink[];
}

const links: NavLink[] = [
  { name: "Home Page", href: "/dashboard", icon: HomeIcon },
  {
    name: "Products",
    href: "/dashboard/products",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: "Reference",
    href: "",
    icon: CogIcon,
    hasSubmenu: true,
    submenu: [
      {
        name: "Categories",
        href: "/dashboard/reference/categories",
        icon: TagIcon,
      },
      {
        name: "Units",
        href: "/dashboard/reference/units",
        icon: ScaleIcon,
      },
    ],
  },
];

const NavLinks: React.FC<{ items: NavLink[] }> = ({ items }) => {
  const pathname = usePathname();

  return (
    <>
      {items.map((link) => {
        const LinkIcon = link.icon;

        if (link.hasSubmenu) {
          return (
            <div key={link.name} className="relative group">
              <Link href={link.href} legacyBehavior>
                <a
                  className={clsx(
                    "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                    { "bg-sky-100 text-blue-600": pathname === link.href }
                  )}
                >
                  <LinkIcon className="w-6" />
                  <p className="hidden md:block">{link.name}</p>
                </a>
              </Link>

              {link.hasSubmenu && (
                <div className="absolute hidden group-hover:block space-y-2">
                  <NavLinks items={link.submenu || []} />
                </div>
              )}
            </div>
          );
        }

        return (
          <Link key={link.name} href={link.href} legacyBehavior>
            <a
              className={clsx(
                "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                { "bg-sky-100 text-blue-600": pathname === link.href }
              )}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </a>
          </Link>
        );
      })}
    </>
  );
};

const Sidebar = () => {
  return <NavLinks items={links} />;
};

export default Sidebar;
