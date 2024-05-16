import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-10 h-16 border-b border-dashed bg-white px-10 dark:bg-[#09090B]">
      <div className="flex h-full w-full items-center justify-between border-x border-dashed px-10">
        <div className="item-center flex gap-5">
          <div className="">
            <Link href="/">Logo</Link>
          </div>
          <div className="flex gap-5">
            <Link href="/experiences">Experiences</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
