import Image from "next/image";
import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCSharp, TbFileTypeSql } from "react-icons/tb";
import { TechBadge } from "./TechBadge";
import { useTranslations } from "next-intl";
import { TypewriterGradient } from "./TypeWriterGradient";

const techs = [
  { icon: BiLogoTypescript, label: "Typescript", href: "#skills" },
  { icon: RiJavascriptFill, label: "Javascript", href: "#skills" },
  { icon: FaReact, label: "React", href: "#skills" },
  { icon: SiNextdotjs, label: "Next", href: "#skills" },
  { icon: FaHtml5, label: "HTML5", href: "#skills" },
  { icon: FaCss3Alt, label: "CSS3", href: "#skills" },
  { icon: FaGithub, label: "Github", href: "#skills" },
  { icon: RiTailwindCssFill, label: "Tailwind", href: "#skills" },
  { icon: TbBrandCSharp, label: "CSharp", href: "#skills" },
  { icon: FaNodeJs, label: "Node", href: "#skills" },
  { icon: TbFileTypeSql, label: "SQL", href: "#skills" },
];

export default function WelcomeSection() {
  const t = useTranslations("About");

  return (
    <section id="about" className="flex w-full flex-col justify-center gap-14">
      <div
        className="self-center w-fit inline-block rounded-full p-1"
        style={{
          background: "linear-gradient(135deg, #9333EA 70%, #EC4899 100%)",
        }}
      >
        <div className="rounded-full bg-background p-0.5">
          <Image
            src="/profile-pic.jpeg"
            alt="Profile"
            width={128}
            height={128}
            className="rounded-full object-cover w-32 h-32"
          />
        </div>
      </div>

      <div>
        <h1 className="text-2xl mb-4">
          {t("greeting")}

          <span className="text-purple-500"> {t("name")}</span>
        </h1>

        <TypewriterGradient
          words={[t("jobTitle").toString(), t("about").toString()]}
          className="text-3xl"
        />

        <p className="mt-4">
          {t("experience")}
          <span className="font-semibold text-purple-500">
            React, Next.js, TypeScript, JavaScript
          </span>{" "}
          {t("and")}{" "}
          <span className="font-semibold text-purple-500">Node.js</span>.
        </p>

        <p>{t("education")}</p>

        <p>{t("alwaysImprove")}</p>
      </div>

      <div className="flex gap-2 self-center flex-wrap justify-center">
        {techs.map((tech) => (
          <TechBadge key={tech.label} {...tech} />
        ))}
      </div>
    </section>
  );
}
