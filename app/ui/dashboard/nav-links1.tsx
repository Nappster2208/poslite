"use client";

import {
  UserGroupIcon,
  DocumentDuplicateIcon,
  CurrencyDollarIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  TagIcon,
  ScaleIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";

type Link = {
  name: string;
  href: string;
  icon: React.ElementType<any>;
  submenu?: SubmenuLink[];
};

type SubmenuLink = {
  name: string;
  href: string;
  icon: React.ElementType<any>;
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
    href: "/dashboard/tools",
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
            <Link
              href={sublink.href}
              onClick={(e) => handleSubmenuClick(e, sublink.name)}
              className={clsx(
                "flex h-[48px] items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                {
                  "text-blue-600": pathname === sublink.href,
                }
              )}
            >
              <div>{sublink.name}</div>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <div key={link.name} className="relative">
            <div
              onClick={() => handleToggleSubmenu(link.name)}
              className={clsx(
                "flex h-[48px] items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                { "bg-sky-100 text-blue-600": pathname === link.href }
              )}
            >
              {LinkIcon && <LinkIcon className="w-6" />}
              <p className="hidden md:block">{link.name}</p>
              {link.submenu && (
                <span className="ml-auto">
                  {openSubmenu === link.name ? (
                    <span className="arrow-down">&#x25B2;</span>
                  ) : (
                    <span className="arrow-down">&#x25BC;</span>
                  )}
                </span>
              )}
            </div>
            {renderSubMenu(link.submenu, link.name)}
          </div>
        );
      })}
    </>
  );
};

export default NavLinks;
