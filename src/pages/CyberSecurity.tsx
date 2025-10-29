import React from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../components/LanguageSwitcher";

export const CyberSecurity: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div style={{ padding: "2rem" }}>
      <LanguageSwitcher />
      <h1>{t("cyber.title")}</h1>
      <p>{t("cyber.content")}</p>
    </div>
  );
};
