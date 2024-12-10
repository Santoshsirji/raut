"use client";
import Link from "next/link";
import { useMemo } from 'react';

const NavbarMenu = ({ pathname }) => {
  const navigations = useMemo(() => [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Notes",
      href: "/note",
    },
    {
      label: "Blogs",
      href: "/blogs",
    },
    {
      label: "PYQs",
      href: "/modelquestions",
    },
  ], []);

  return (
    <div className='flex w-max flex-row items-center text-sm md:text-md lg:text-lg space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 xl:space-x-10 space-between'>
      {navigations.map((item, index) => (
        <div key={index} className={pathname === item.href ? "border-b-2 border-zinc-600 transition translate duration-100  text-zinc-900 dark:text-white" : "hover:border-zinc-600 hover:border-b-2 transition translate duration-100 text-zinc-800 dark:text-white hover:text-zinc-900 "}>
          <Link href={item.href}>
            <span>{item.label}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavbarMenu;
