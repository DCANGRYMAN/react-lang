import React from "react";
import i18n from "../i18n";

export const LanguageSwitcher: React.FC = () => {
  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  return (
    <div style={{ margin: "1rem" }}>
      <button
        onClick={() => changeLanguage("en")}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "1.5rem",
        }}
      >
        🇺🇸
      </button>
      <button
        onClick={() => changeLanguage("pt-BR")}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "1.5rem",
          marginLeft: "0.5rem",
        }}
      >
        🇧🇷
      </button>
    </div>
  );
};
export default LanguageSwitcher;