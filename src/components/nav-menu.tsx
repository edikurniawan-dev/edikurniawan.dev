"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";

export default function NavMenu() {
  const pathname = usePathname();

  const menus = [
    {
      name: "Experiences",
      href: "/experiences",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-between border-x border-dashed px-10">
      <div className="item-center flex gap-5">
        <Link href="/">
          <Logo className="h-10 w-10 text-[hsl(var(--foreground))]" />
        </Link>
        <div className="flex gap-1">
          {menus.map((menu, i) => (
            <Link
              key={i}
              href={menu.href}
              className={`${pathname === menu.href ? "bg-[hsl(var(--accent))]" : ""} rounded-md`}
            >
              <Button variant="ghost" className="text-base">
                {menu.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
      <div className="">
        <ModeToggle />
      </div>
    </div>
  );
}
