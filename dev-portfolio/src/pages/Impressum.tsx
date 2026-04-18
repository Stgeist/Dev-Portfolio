import styles from "./Impressum.module.css";

function Impressum() {
  return (
    <div className={styles.content}>
      <h1>Impressum</h1>

      <p>Angaben gemäß § 5 TMG</p>

      <p>
        Stefan Geist
        <br />
        Deine Straße 123
        <br />
        12345 Deine Stadt
        <br />
        Deutschland
      </p>

      <p>E-Mail: deine.email@example.com</p>

      <p>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</p>

      <p>
        Stefan Geist
        <br />
        Adresse wie oben
      </p>
    </div>
  );
}

export default Impressum;
