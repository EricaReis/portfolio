"use client";

import { useTranslations } from "next-intl";

export default function LanguageClientComponent() {
  const t = useTranslations("Home");

  return (
    <div>
      <h1>{t("greeting")}</h1>
    </div>
  );
}
