import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Badge } from "@/components/ui/badge";
import { OptionToggle } from "./option-toggle";

dayjs.extend(duration);

const experienceCardPlaceVariants = cva("flex w-full mx-auto items-center", {
  variants: {
    place: {
      left: "justify-start",
      right: "justify-end",
    },
  },
  defaultVariants: {
    place: "left",
  },
});

interface ExperienceCardProps extends VariantProps<typeof experienceCardPlaceVariants> {
  companyName: string;
  companyWebsite: string | null;
  companyLinkedin: string | null;
  position: string;
  duration: Array<number>;
  taskDesc: string;
  number: number;
}

export default function ExperienceCard({
  companyName,
  companyWebsite,
  companyLinkedin,
  position,
  duration,
  taskDesc,
  number,
  place,
}: ExperienceCardProps) {
  const durationTime =
    dayjs(duration[0]).format("MMM YYYY") + " - " + (duration[1] ? dayjs(duration[1]).format("MMM YYYY") : "Now");

  const startDate = dayjs(duration[0]);
  const endDate = dayjs(duration[1] || dayjs());

  const totalMonths = endDate.diff(startDate, "month") + 1;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let durationText;
  if (years > 0) {
    durationText = `${years} year${years > 1 ? "s" : ""} ${months} month${months > 1 ? "s" : ""}`;
  } else {
    durationText = `${months} month${months > 1 ? "s" : ""}`;
  }

  return (
    <div className="relative flex flex-col items-center lg:flex-row">
      <div className={cn(experienceCardPlaceVariants({ place }))}>
        <div className={`${place === "left" ? "lg:pr-8" : "lg:pl-8"} w-full lg:w-1/2`}>
          <div className="rounded-md border border-dashed">
            <div className="border-b border-dashed p-5">
              <div className="flex items-center justify-between text-lg font-bold">
                {position}

                <OptionToggle companyWebsite={companyWebsite} companyLinkedin={companyLinkedin} />
              </div>
              <p>{companyName}</p>
              <div className="flex items-center gap-1">
                <Badge>{durationTime}</Badge>
                <p className="text-sm"> / {durationText}</p>
              </div>
            </div>
            <div className="p-5">
              <p className="text-[15px]">{taskDesc}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-6 transform items-center justify-center overflow-hidden rounded-md border border-dashed bg-[hsl(var(--background))] font-bold lg:translate-y-0">
        {number}
      </div>
    </div>
  );
}
