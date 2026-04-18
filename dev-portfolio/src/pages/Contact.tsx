import styles from "./Contact.module.css";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <div className={styles.content}>
      <div className={styles.text}>
        <h1>{t("contact.title")}</h1>

        <p>{t("contact.text")}</p>
      </div>

      <div className={styles.actions}>
        <a href="mailto:stefangeist06@gmail.com" className={styles.button}>
          {t("contact.email")}
        </a>
      </div>
    </div>
  );
}

export default Contact;
