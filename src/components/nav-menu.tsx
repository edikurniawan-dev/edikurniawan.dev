"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBriefcase, FaPaperPlane, FaSwatchbook } from "react-icons/fa6";
import { Button } from "./ui/button";
import { Logo } from "./logo";
import { ModeToggle } from "./mode-toggle";

export default function NavMenu() {
  const pathname = usePathname();

  const menus = [
    {
      name: "Experiences",
      icon: <FaBriefcase className="size-5" />,
      href: "/experiences",
    },
    {
      name: "Projects",
      icon: <FaSwatchbook className="size-5" />,
      href: "/projects",
    },
    {
      name: "Contact",
      icon: <FaPaperPlane className="size-5" />,
      href: "/contact",
    },
  ];

  return (
    <>
      <div className="hidden h-full w-full items-center justify-between border-x border-dashed px-10 md:flex">
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

      <div className="flex h-full items-center justify-evenly border-x border-dashed md:hidden">
        <Link href="/" className={`${pathname === "/" ? "bg-[hsl(var(--accent))]" : ""} rounded-md`}>
          <Button variant="ghost" size="icon" className="h-11 w-11">
            <Logo className="h-6 w-6 text-[hsl(var(--foreground))]" />
          </Button>
        </Link>
        {menus.map((menu, i) => (
          <Link
            key={i}
            href={menu.href}
            className={`${pathname === menu.href ? "bg-[hsl(var(--accent))]" : ""} rounded-md`}
          >
            <Button variant="ghost" size="icon" className="h-11 w-11">
              {menu.icon}
            </Button>
          </Link>
        ))}
        <div className="">
          <ModeToggle />
        </div>
      </div>
    </>
  );
}
