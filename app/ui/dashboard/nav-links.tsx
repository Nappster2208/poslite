"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import {
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  TagIcon,
  ScaleIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

type SubmenuLink = {
  name: string;
  href: string;
  icon: React.ElementType<any>;
};

type Link = {
  name: string;
  href: string;
  icon: React.ElementType<any>;
  submenu?: SubmenuLink[];
};

const links: Link[] = [
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
    submenu: [
      {
        name: "Categories",
        href: "/dashboard/tools/categories",
        icon: TagIcon,
      },
      { name: "Units", href: "/dashboard/tools/units", icon: ScaleIcon },
    ],
  },
];

const NavLinks: React.FC = () => {
  const pathname = usePathname();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const handleToggleSubmenu = (name: string) => {
    setOpenSubmenu((prev) => (prev === name ? null : name));
  };

  const handleSubmenuClick = (e: React.MouseEvent, name: string) => {
    e.stopPropagation();
    // Handle the click on the submenu item as needed
    // You can add navigation logic or any other actions here
  };

  const renderSubMenu = (
    submenu: SubmenuLink[] | undefined,
    parentName: string
  ) => {
    if (!submenu) {
      return null;
    }

    return (
      <ul
        className={clsx("ml-6 space-y-1 mt-1", {
          hidden: openSubmenu !== parentName,
        })}
        onClick={(e) => e.stopPropagation()} // Prevent submenu click from closing parent
      >
        {submenu.map((sublink) => (
          <li key={sublink.name}>
            <Link href={sublink.href} legacyBehavior>
              <a
                onClick={(e) => handleSubmenuClick(e, sublink.name)}
                className={clsx(
                  "flex h-[48px] items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                  {
                    "text-blue-600": pathname === sublink.href,
                  }
                )}
              >
                {sublink.icon && <sublink.icon className="w-6" />}
                {sublink.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      {links.map((link) => {
        const { icon: LinkIcon, href, name, submenu } = link;
        return (
          <div key={name} className="relative">
            <Link href={href} legacyBehavior>
              <a
                onClick={() => handleToggleSubmenu(name)}
                className={clsx(
                  "flex h-[48px] items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                  { "bg-sky-100 text-blue-600": pathname === href }
                )}
              >
                {LinkIcon && <LinkIcon className="w-6" />}
                <p className="hidden md:block">{name}</p>
                {submenu && (
                  <span className="ml-auto">
                    {openSubmenu === name ? (
                      <span className="arrow-down text-slate-400">
                        &#x25B2;
                      </span>
                    ) : (
                      <span className="arrow-down text-slate-400">
                        &#x25BC;
                      </span>
                    )}
                  </span>
                )}
              </a>
            </Link>
            {renderSubMenu(submenu, name)}
          </div>
        );
      })}
    </>
  );
};

export default NavLinks;
