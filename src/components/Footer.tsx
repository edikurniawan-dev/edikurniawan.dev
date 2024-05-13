import { IconBrandGithub, IconBrandLinkedin } from "@irsyadadl/paranoid";
import React from "react";

export default function Footer() {
  return (
    <footer className="h-16 border-t border-dashed px-10">
      <div className="flex h-full w-full items-center justify-between border-x border-dashed px-10">
        <div className="text-sm">© 2024 edikurniawan.dev by Edi Kurniawan. All rights reserved.</div>
        <div className="flex gap-2">
          <IconBrandGithub className="size-6" />
          <IconBrandLinkedin className="size-6" />
        </div>
      </div>
    </footer>
  );
}
