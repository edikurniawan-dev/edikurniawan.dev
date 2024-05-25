import Link from "next/link";
import { FaEllipsisVertical, FaLinkedin } from "react-icons/fa6";
import { TbWorldUpload } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface OptionToggleProps {
  companyWebsite: string | null;
  companyLinkedin: string | null;
}

export function OptionToggle({ companyWebsite, companyLinkedin }: OptionToggleProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="secondary" className="h-7 w-7 border border-dashed">
          <FaEllipsisVertical className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {companyWebsite && (
          <Link href={companyWebsite} target="_blank">
            <DropdownMenuItem className="flex cursor-pointer gap-2">
              <TbWorldUpload className="size-5" /> Website
            </DropdownMenuItem>
          </Link>
        )}
        {companyLinkedin && (
          <Link href={companyLinkedin} target="_blank">
            <DropdownMenuItem className="flex cursor-pointer gap-2">
              <FaLinkedin className="size-5" /> LinkedIn
            </DropdownMenuItem>
          </Link>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
