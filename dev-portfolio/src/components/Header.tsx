import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navWrapper}>
        <ul className={styles.navList}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              {t("nav.home")}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/aboutMe"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              {t("nav.about")}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/lab"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              {t("nav.lab")}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              {t("nav.contact")}
            </NavLink>
          </li>
        </ul>
        <div className={styles.langSwitch}>
          <button
            onClick={() => changeLanguage("en")}
            className={i18n.language === "en" ? styles.activeLang : ""}
          >
            EN
          </button>
          <span>|</span>
          <button
            onClick={() => changeLanguage("de")}
            className={i18n.language === "de" ? styles.activeLang : ""}
          >
            DE
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
