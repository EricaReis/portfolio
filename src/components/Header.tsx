import Image from "next/image";
import LanguageToggle from "@/components/LanguageToggle";
import { useTranslations } from "next-intl";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  const t = useTranslations("Header");

  return (
    <header>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex flex-row items-center space-x-1">
          <Image
            src="/primary-icon.png"
            alt="Portuguese flag"
            width={40}
            height={40}
            style={{ marginRight: "8px" }}
          />
          <h1 className="text-2xl font-bold">Érica Reis</h1>
        </div>
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#about" className="hover:text-primary transition-colors">
            {t("about")}
          </a>
          <a href="#projects" className="hover:text-primary transition-colors">
            {t("projects")}
          </a>
          <a href="#skills" className="hover:text-primary transition-colors">
            {t("skills")}
          </a>
          <a href="#courses" className="hover:text-primary transition-colors">
            {t("courses")}
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            {t("contact")}
          </a>

          <ThemeSwitcher />

          <LanguageToggle />
        </nav>
      </div>
    </header>
  );
}
