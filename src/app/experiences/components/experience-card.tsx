import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import dayjs from "dayjs";

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

const experienceCardPaddingVariants = cva("w-full lg:w-1/2", {
  variants: {
    padding: {
      left: "lg:pl-8",
      right: "lg:pr-8",
    },
  },
  defaultVariants: {
    padding: "right",
  },
});

interface ExperienceCardProps
  extends VariantProps<typeof experienceCardPlaceVariants>,
    VariantProps<typeof experienceCardPaddingVariants> {
  company: string;
  position: string;
  duration: Array<number>;
  taskDesc: string;
  number: number;
}

export default function ExperienceCard({
  company,
  position,
  duration,
  taskDesc,
  number,
  place,
  padding,
}: ExperienceCardProps) {
  const durationText =
    dayjs(duration[0]).format("MMM YYYY") + " - " + (duration[1] ? dayjs(duration[1]).format("MMM YYYY") : "Now");

  return (
    <div className="relative flex flex-col items-center lg:flex-row">
      <div className={cn(experienceCardPlaceVariants({ place }))}>
        <div className={cn(experienceCardPaddingVariants({ padding }))}>
          <div className="border border-dashed">
            <div className="border-b border-dashed p-5">
              <div className="text-lg font-bold">{position}</div>
              <p>{company}</p>
              <Badge>{durationText}</Badge>
            </div>
            <div className="p-5">
              <p className="text-[15px]">{taskDesc}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-6 transform items-center justify-center overflow-hidden border border-dashed bg-white font-bold dark:bg-[#09090B] lg:translate-y-0">
        {number}
      </div>
    </div>
  );
}
