"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  CurrencyDollarIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home Page", href: "/dashboard", icon: HomeIcon },
  {
    name: "Products",
    href: "/dashboard/products",
    icon: ClipboardDocumentListIcon,
  },
  { name: "Prices", href: "/dashboard/prices", icon: CurrencyDollarIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {items.map((link) => {
        const LinkIcon = link.icon;

        if (link.hasSubmenu) {
          return (
            <div key={link.name} className="relative group">
              <Link legacyBehavior href={link.href}>
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
                <div className="absolute hidden group-hover:block mt-1 space-y-2">
                  <NavLinks items={link.submenu || []} />
                </div>
              )}
            </div>
          );
        }

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              { "bg-sky-100 text-blue-600": pathname === link.href }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
