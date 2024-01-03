"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { SubmenuLink } from "@/app/lib/types";
import clsx from "clsx";
import * as SolidIcons from "@heroicons/react/24/solid";
import * as OutlineIcons from "@heroicons/react/24/outline";

interface Props {
  icon: any;
  color?: string;
  size?: number;
  outline?: boolean;
}

export const HeroIcon = (props: Props): JSX.Element => {
  const { icon, color, size, outline = false } = props;
  const { ...icons } = outline ? (OutlineIcons as any) : (SolidIcons as any);
  const Icon = icons[icon] as React.ElementType<any>;
  const classes = [
    `${color ? color : "text-black"}`,
    size ? "h-6" : "h-6",
    size ? "w-6" : "w-6",
  ];
  return <Icon className={classes.join(" ")} />;
};

export default function NavLinks() {
  const pathname = usePathname();
  const [menus, setMenus] = useState<any>(null);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(true);

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
                {sublink.icon && (
                  <HeroIcon
                    icon={sublink.icon}
                    color="text-slate-700"
                    size={6}
                    outline
                  />
                )}
                {sublink.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  useEffect(() => {
    fetch("/api/menus")
      .then((res) => res.json())
      .then((data) => {
        setMenus(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!menus) return <p>No profile data</p>;
  return (
    <>
      {menus.map((menu: any) => {
        const { icon: LinkIcon, href, name, submenu, id } = menu;
        return (
          <div
            key={id}
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
                {/* {LinkIcon && <LinkIcon className="w-6" />} */}
                {LinkIcon && (
                  <HeroIcon
                    icon={LinkIcon}
                    color="text-slate-700"
                    size={6}
                    outline
                  />
                )}

                <p className="hidden md:block">{name}</p>
                {submenu && submenu.length > 0 && (
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
}
