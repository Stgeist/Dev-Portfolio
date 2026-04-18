import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.links}>
          <a
            href="https://github.com/Stgeist"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/stefan-geist-1a400b3b2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:stefangeist06@gmail.com">Email</a>
        </div>

        <NavLink to="/impressum" className={styles.imprint}>
          Impressum
        </NavLink>
      </div>
    </footer>
  );
}

export default Footer;
