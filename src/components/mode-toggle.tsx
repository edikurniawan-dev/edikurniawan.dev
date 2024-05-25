import { useTheme } from "next-themes";
import { IconCircleHalf, IconDeviceDesktop, IconMoon, IconSun } from "@irsyadadl/paranoid";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <IconCircleHalf className="size-6 md:size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")} className="flex gap-2">
          <IconSun className="size-5" /> Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="flex gap-2">
          <IconMoon className="size-5" /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="flex gap-2">
          <IconDeviceDesktop className="size-5" /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
