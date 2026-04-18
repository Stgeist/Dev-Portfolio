import { useState } from "react";
import styles from "./Lab.module.css";

function Lab() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleShorten = async () => {
    if (!url) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:8080/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `baseUrl=${encodeURIComponent(url)}`,
      });
      const data = await res.text();

      const fullShortUrl = `http://localhost:8080/api/${data}`;
      setShortUrl(fullShortUrl);

      // 🔥 copy to clipboard
      navigator.clipboard.writeText(fullShortUrl);
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.text}>
        <h1>Lab</h1>
        <p>
          Small fullstack project built with Spring Boot and PostgreSQL. Try the
          link shortener below.
        </p>
      </div>

      <div className={styles.project}>
        <h3 className={styles.glow}>Link Shortener</h3>

        <div className={styles.inputRow}>
          <input
            type="text"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

          <button onClick={handleShorten}>{loading ? "..." : "Shorten"}</button>
        </div>

        {error && <p className={styles.error}>{error}</p>}

        {shortUrl && (
          <div className={styles.result}>
            <p>Short URL:</p>

            <a href={shortUrl} target="_blank" rel="noopener noreferrer">
              {shortUrl}
            </a>

            <span className={styles.copied}>Copied ✓</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Lab;
