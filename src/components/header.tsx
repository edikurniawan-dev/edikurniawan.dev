import { IconPlus } from "@irsyadadl/paranoid";
import NavMenu from "./nav-menu";

export function Header() {
  return (
    <header className="fixed bottom-0 top-auto z-10 h-16 w-full border-y border-dashed bg-[hsl(var(--background))] px-5 md:sticky md:top-0 md:px-14">
      <IconPlus className="absolute -top-2.5 left-[11px] size-5 md:left-[47px]" />
      <IconPlus className="absolute -top-2.5 right-[11px] size-5 md:right-[47px]" />

      <IconPlus className="absolute -bottom-2.5 left-[11px] size-5 md:left-[47px]" />
      <IconPlus className="absolute -bottom-2.5 right-[11px] size-5 md:right-[47px]" />

      <NavMenu />
    </header>
  );
}
