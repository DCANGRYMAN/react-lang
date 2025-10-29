import React from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../../components/LanguageSwitcher";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  const { t } = useTranslation("home");

  return (
    <div style={{ padding: "2rem" }}>
      <LanguageSwitcher />
      <h1>{t("home.title")}</h1>
      <p>{t("home.subtitle")}</p>

      <ul>
        <li><Link to="/ai">🤖 {t("ai.title")}</Link></li>
        <li><Link to="/cyber">🛡️ {t("cyber.title")}</Link></li>
        <li><Link to="/cloud">☁️ {t("cloud.title")}</Link></li>
        <li><Link to="/software">💻 {t("software.title")}</Link></li>
        <li><Link to="/data">📊 {t("data.title")}</Link></li>
      </ul>
    </div>
  );
};
