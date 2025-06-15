import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div>
      <h1>{t("greeting")}</h1>
    </div>
  );
}
