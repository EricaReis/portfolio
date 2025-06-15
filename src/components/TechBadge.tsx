import { Badge } from "./ui/badge";
import Link from "next/link";

interface TechBadgeProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

export function TechBadge({ href, icon: Icon, label }: TechBadgeProps) {
  return (
    <Link href={href}>
      <Badge
        variant="secondary"
        className="
          relative rounded-full h-fit py-3 px-6 bg-backgroundSecondary text-sm gap-2
          transition-all duration-300 ease-in-out flex items-center border-2 border-transparent
          hover:border-violet-400 hover:text-violet-300 hover:bg-gray-700 hover:shadow-lg
          hover:shadow-violet-400/25 hover:scale-105 group overflow-hidden
          before:absolute before:inset-0 before:rounded-full before:p-[2px]
          before:bg-gradient-to-r before:from-violet-400 before:via-purple-500 before:to-pink-500
          before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
          before:-z-10
        "
      >
        <div
          className="
            absolute inset-[2px] rounded-full bg-gray-800 group-hover:bg-gray-700
            transition-colors duration-300 -z-10
          "
        />
        <Icon
          className="
            h-5 w-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110
            relative z-10
          "
        />
        <span className="relative z-10 font-medium">{label}</span>
      </Badge>
    </Link>
  );
}
