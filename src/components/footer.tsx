import Link from "next/link";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { IconPlus } from "@irsyadadl/paranoid";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <div className="relative h-[90px] border-y border-dashed px-5 pb-2.5 sm:h-16 md:px-14 md:pb-0">
      <IconPlus className="absolute -top-2.5 left-[11px] size-5 md:left-[47px]" />
      <IconPlus className="absolute -top-2.5 right-[11px] size-5 md:right-[47px]" />

      <IconPlus className="absolute -bottom-2.5 left-[11px] size-5 md:left-[47px]" />
      <IconPlus className="absolute -bottom-2.5 right-[11px] size-5 md:right-[47px]" />

      <div className="flex h-full w-full flex-col-reverse items-center justify-center gap-1 border-x border-dashed px-5 md:flex-row md:justify-between md:gap-0 md:px-10">
        <p className="text-center text-[13px] leading-3">
          © 2024 edikurniawan.dev by Edi Kurniawan. All rights reserved.
        </p>
        <div className="flex items-center">
          <Link href="mailto:edikurniawan.dev@gmail.com" target="_blank">
            <Button size="icon" variant="ghost">
              <SiGmail className="size-5" />
            </Button>
          </Link>
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
