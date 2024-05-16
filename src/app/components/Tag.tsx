import Link from "next/link";
import React from "react";

interface TagProps {
  title: string;
  href: string;
  icon: React.ReactNode;
}

export default function Tag({ title, href, icon }: TagProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="inline-flex items-center gap-2 rounded-lg border bg-zinc-100 px-3 text-sm"
    >
      {icon} {title}
    </Link>
  );
}
