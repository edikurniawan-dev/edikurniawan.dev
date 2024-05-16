import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex h-[calc(100dvh-168px)] flex-col items-center justify-center gap-2">
      <h1 className="text-xl">
        <span className="text-3xl font-bold">404</span> | <span className="">Not Found</span>
      </h1>
      <p>What are you looking for dude?</p>

      <Button variant="outline" className="mt-10">
        <Link href="/">Go back to Home</Link>
      </Button>
    </div>
  );
}
