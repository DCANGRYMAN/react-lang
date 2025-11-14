import React from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../../components/LanguageSwitcher";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  const { t } = useTranslation();

  const styles = {
    container: {
      padding: "2rem",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "2rem",
      borderBottom: "2px solid #f0f0f0",
      paddingBottom: "1rem",
    },
    title: {
      fontSize: "2.5rem",
      margin: "0 0 0.5rem 0",
    },
    subtitle: {
      fontSize: "1.1rem",
      color: "#666",
      margin: "0",
    },
    cardContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "1.5rem",
      marginTop: "2rem",
    },
    card: {
      padding: "1.5rem",
      border: "1px solid #ddd",
      borderRadius: "8px",
      textDecoration: "none",
      color: "inherit",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    cardHover: {
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      transform: "translateY(-4px)",
    },
    icon: {
      fontSize: "2.5rem",
      marginRight: "0.5rem",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>{t("home.title")}</h1>
          <p style={styles.subtitle}>{t("home.subtitle")}</p>
        </div>
        <LanguageSwitcher />
      </div>

      <div style={styles.cardContainer}>
        <Link to="/ai" style={styles.card}>
          <div onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
            e.currentTarget.style.transform = styles.cardHover.transform;
          }} onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "translateY(0)";
          }}>
            <h2>
              <span style={styles.icon}>🤖</span>
              {t("ai.title")}
            </h2>
            <p>{t("ai.description")}</p>
          </div>
        </Link>

        <Link to="/cyber" style={styles.card}>
          <div onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
            e.currentTarget.style.transform = styles.cardHover.transform;
          }} onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "translateY(0)";
          }}>
            <h2>
              <span style={styles.icon}>🛡️</span>
              {t("cyber.title")}
            </h2>
            <p>{t("cyber.description")}</p>
          </div>
        </Link>

        <Link to="/cloud" style={styles.card}>
          <div onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
            e.currentTarget.style.transform = styles.cardHover.transform;
          }} onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "translateY(0)";
          }}>
            <h2>
              <span style={styles.icon}>☁️</span>
              {t("cloud.title")}
            </h2>
            <p>{t("cloud.description")}</p>
          </div>
        </Link>

        <Link to="/software" style={styles.card}>
          <div onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
            e.currentTarget.style.transform = styles.cardHover.transform;
          }} onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "translateY(0)";
          }}>
            <h2>
              <span style={styles.icon}>💻</span>
              {t("software.title")}
            </h2>
            <p>{t("software.description")}</p>
          </div>
        </Link>

        <Link to="/data" style={styles.card}>
          <div onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
            e.currentTarget.style.transform = styles.cardHover.transform;
          }} onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "translateY(0)";
          }}>
            <h2>
              <span style={styles.icon}>📊</span>
              {t("data.title")}
            </h2>
            <p>{t("data.description")}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
