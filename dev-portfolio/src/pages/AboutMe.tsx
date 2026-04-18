import styles from "./AboutMe.module.css";
import applicationPic from "../images/Bewerbungsfoto.jpg";
import { useTranslation } from "react-i18next";

function AboutMe() {
  const { t, i18n } = useTranslation();

  const lang = i18n.language.split("-")[0];
  const cvPath = `/cv/StefanGeist_PortfolioCV_${lang}.pdf`;

  return (
    <div className={styles.content}>
      <img src={applicationPic} alt="Profile" className={styles.image} />

      <div className={styles.text}>
        <h1>{t("about.title")}</h1>

        <p style={{ whiteSpace: "pre-line" }}>{t("about.text")}</p>
      </div>

      <div className={styles.actions}>
        <a
          href={cvPath}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          {t("about.cv")}
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
