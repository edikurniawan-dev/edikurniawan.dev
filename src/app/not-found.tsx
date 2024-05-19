import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-[calc(100dvh-168px)] flex-col items-center justify-center gap-2">
      <h1 className="text-xl">
        <span className="text-3xl font-bold">404</span> | <span className="">Not Found</span>
      </h1>
      <p>What are you looking for dude?</p>

      <Link href="/">
        <Button variant="outline" className="mt-10">
          Go back to Home
        </Button>
      </Link>
    </div>
  );
}
