import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Button } from "./ui/button";
import { IconChevronLgLeft, IconChevronLgRight, IconPlus } from "@irsyadadl/paranoid";

export function Footer() {
  return (
    <div className="relative h-16 border-y border-dashed px-14">
      <IconPlus className="absolute -top-2.5 left-[47px] size-5" />
      <IconPlus className="absolute -top-2.5 right-[47px] size-5" />

      <IconChevronLgLeft className="absolute -bottom-[6px] left-[51px] size-4 -rotate-45" />
      <IconChevronLgLeft className="absolute -bottom-[6px] left-[46px] size-4 -rotate-[135deg]" />
      <IconChevronLgRight className="absolute -bottom-[6px] right-[51px] size-4 rotate-45" />
      <IconChevronLgRight className="absolute -bottom-[6px] right-[46px] size-4 rotate-[135deg]" />

      <div className="flex h-full w-full items-center justify-between border-x border-dashed px-10">
        <div className="text-xs">© 2024 edikurniawan.dev by Edi Kurniawan. All rights reserved.</div>
        <div className="flex items-center">
          <Link href="https://www.linkedin.com/in/edikurniawan-dev/" target="_blank">
            <Button size="icon" variant="ghost">
              <SiLinkedin className="size-5" />
            </Button>
          </Link>
          <Link href="https://github.com/edikurniawan-dev" target="_blank">
            <Button size="icon" variant="ghost">
              <SiGithub className="size-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
