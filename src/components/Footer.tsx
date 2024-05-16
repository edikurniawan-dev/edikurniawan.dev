import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export function Footer() {
  return (
    <footer className="h-16 border-t border-dashed px-10">
      <div className="flex h-full w-full items-center justify-between border-x border-dashed px-10">
        <div className="text-xs">© 2024 edikurniawan.dev by Edi Kurniawan. All rights reserved.</div>
        <div className="flex items-center gap-2.5">
          <Link href="https://www.linkedin.com/in/edikurniawan-dev/" target="_blank">
            <SiLinkedin className="size-5" />
          </Link>
          <Link href="https://github.com/edikurniawan-dev" target="_blank">
            <SiGithub className="size-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
