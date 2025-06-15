import Image from "next/image";
import { Badge } from "./ui/badge";
import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCSharp } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { TbFileTypeSql } from "react-icons/tb";

const techs = [
  { icon: BiLogoTypescript, label: "Typescript" },
  { icon: RiJavascriptFill, label: "Javascript" },
  { icon: FaReact, label: "React" },
  { icon: SiNextdotjs, label: "Next" },
  { icon: FaHtml5, label: "HTML5" },
  { icon: FaCss3Alt, label: "CSS3" },
  { icon: FaGithub, label: "Github" },
  { icon: RiTailwindCssFill, label: "Tailwind" },
  { icon: TbBrandCSharp, label: "CSharp" },
  { icon: FaNodeJs, label: "Node" },
  { icon: TbFileTypeSql, label: "SQL" },
];

export default function WelcomeSection() {
  return (
    <section className="flex w-full flex-col justify-center gap-14">
      <div className="self-center w-fit inline-block rounded-full p-1 bg-transparent border-2 border-violet-500">
        <div className="rounded-full bg-background border-2 border-background">
          <Image
            src="/profile-pic.jpeg"
            alt="Profile"
            width={128}
            height={128}
            className="rounded-full object-cover w-32 h-32"
          />
        </div>
      </div>

      <div className="flex gap-2 self-center flex-wrap justify-center">
        {techs.map(({ icon: Icon, label }) => (
          <Badge
            key={label}
            variant="secondary"
            className="rounded-full h-fit py-2 px-6 bg-backgroundSecondary text-sm gap-1 text-white hover:text-violet-400 transition-colors duration-300 ease-in-out flex items-center"
          >
            <Icon className="h-6 w-6" />
            {label}
          </Badge>
        ))}
      </div>
    </section>
  );
}
