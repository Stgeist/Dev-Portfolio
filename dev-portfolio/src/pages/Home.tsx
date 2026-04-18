import styles from "./Home.module.css";
import "animate.css";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  const stars = useMemo(() => {
    return Array.from({ length: 25 }).map(() => ({
      left: Math.random() * 100, // %
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 6,
    }));
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.starLayer}>
        {stars.map((star, i) => (
          <span
            key={i}
            className={styles.star}
            style={{
              left: `${star.left}%`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>

      <div className={styles.content}>
        <h1 className="animate__animated animate__fadeInDown">
          <span className={styles.glowing}>Stefan Geist</span>
        </h1>

        <h3 className="animate__animated animate__fadeInUp">
          {t("home.title")}
        </h3>

        <p className="animate__animated animate__fadeInUp animate__delay-2s">
          {t("home.subtitle")}
          <br />
          {t("home.focus")}{" "}
          <b className={styles.glowing}>React and Java | Spring Boot</b>
        </p>
      </div>
    </div>
  );
}

export default Home;
