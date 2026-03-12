import styles from './Home.module.css'
import 'animate.css';

function Home() {

  const stars = Array.from({ length: 25 });

  return (
    <div className={styles.hero}>

          <div className={styles.starLayer}>
            {stars.map((_, i) => (
              <span
                key={i}
                className={styles.star}
                style={{
                  left: `${Math.random() * 200}px`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${6 + Math.random() * 6}s`
                }}
              />
            ))}
          </div>

      <div className={styles.content}>
        <h1 className="animate__animated animate__fadeInDown">
          <span className={styles.glowing}>Stefan Geist</span>
        </h1>
        <h3 className="animate__animated animate__fadeInUp">Junior Software Developer passionate about building modern web applications.</h3>
        <p className="animate__animated animate__fadeInUp animate__delay-2s">
          I enjoy clean code, simple design and learning new technologies <br />
          Currently focused on <b className={styles.glowing}>React and Java | Spring Boot</b> <br />
        </p>
      </div>
    </div>
  )
}

export default Home
