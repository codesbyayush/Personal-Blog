"use client";

import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { useState } from "react";

export default function HamNav() {
    const [open, setopen] = useState(false);
    
    const genericHamburgerLine = `h-0.5 w-6 my-0.5 rounded-full bg-black dark:bg-white transition ease transform duration-300`;

  return (
    <>
      {open && (
        <nav className="sm:hidden flex items-center px-3 py-2 bg-white/90 rounded-full backdrop:blur-sm text-dark font-semibold capitalize border border-solid border-dark fixed top-6 max-[350px]:left-[45%] left-1/2 -translate-x-1/2 z-50">
          <Link href={"/"} className="px-2">
            Home
          </Link>
          <Link href={"/about"} className="px-2">
            About
          </Link>
          <Link href={"/contact"} className="px-2">
            Contact
          </Link>

          <ThemeSwitcher />
        </nav>
      )}
      <button
        className="flex flex-col h-8 w-9 rounded justify-center items-center group sm:hidden "
        onClick={() => setopen(!open)}
      >
        <span
          className={`${genericHamburgerLine} ${
            open
              ? "rotate-45 translate-y-1.5 opacity-75 group-hover:opacity-100"
              : "opacity-75 group-hover:opacity-100"
          }`}
        />
        <span
          className={`${genericHamburgerLine} ${
            open ? "opacity-0" : "opacity-75 group-hover:opacity-100"
          }`}
        />
        <span
          className={`${genericHamburgerLine} ${
            open
              ? "-rotate-45 -translate-y-1.5 opacity-75 group-hover:opacity-100"
              : "opacity-75 group-hover:opacity-100"
          }`}
        />
      </button>
    </>
  );
}
