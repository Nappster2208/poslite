"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { links } from "@/app/ui/dashboard/menu";
import { SubmenuLink } from "@/app/lib/types";

const NavLinks: React.FC = () => {
  const pathname = usePathname();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const handleToggleSubmenu = (name: string) => {
    setOpenSubmenu((prev) => (prev === name ? null : name));
  };

  const handleSubmenuClick = (e: React.MouseEvent, name: string) => {
    e.stopPropagation();
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
          <li
            key={sublink.name}
            className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 duration-300"
          >
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
          <div
            key={name}
            className="relative transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 duration-300"
          >
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
