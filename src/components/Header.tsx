import LanguageToggle from "@/components/LanguageToggle";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Header");

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Érica Beatriz dos Reis</h1>
        <nav className="hidden md:flex space-x-6">
          <LanguageToggle />
          <a href="#about" className="hover:text-primary transition-colors">
            {t("about")}
          </a>
          <a href="#projects" className="hover:text-primary transition-colors">
            {t("projects")}
          </a>
          <a
            href="#skills"
            className="hover:text-primary transition-colors"
          >
            {t("skills")}
          </a>
          <a href="#courses" className="hover:text-primary transition-colors">
            {t("courses")}
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            {t("contact")}
          </a>
        </nav>
      </div>
    </header>
  );
}
