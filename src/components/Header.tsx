import { IconChevronLgLeft, IconChevronLgRight, IconPlus } from "@irsyadadl/paranoid";
import NavMenu from "./nav-menu";

export function Header() {
  return (
    <header className="sticky top-0 z-10 h-16 border-y border-dashed bg-[hsl(var(--background))] px-14">
      <IconChevronLgLeft className="absolute -top-[6px] left-[51px] size-4 rotate-45" />
      <IconChevronLgLeft className="absolute -top-[6px] left-[46px] size-4 rotate-[135deg]" />
      <IconChevronLgRight className="absolute -top-[6px] right-[51px] size-4 -rotate-45" />
      <IconChevronLgRight className="absolute -top-[6px] right-[46px] size-4 -rotate-[135deg]" />

      <IconPlus className="absolute -bottom-2.5 left-[47px] size-5" />
      <IconPlus className="absolute -bottom-2.5 right-[47px] size-5" />

      <NavMenu />
    </header>
  );
}
