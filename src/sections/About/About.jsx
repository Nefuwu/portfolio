import styles from './AboutStyles.module.css';
import { useTheme } from '../../common/ThemeContext';

function About() {
  return (
    <section
      id="about"
      className={styles.container}
    >
      <div className={styles.info}>
        <h1 className="sectionTitle">About Me</h1>
        <p className={styles.paragraph}>
          Hi, I’m Raphael, a software developer focused on building scalable,
          maintainable solutions with Python, JavaScript, and modern web
          frameworks. I take pride in bridging the gap between functionality and
          user experience.
        </p>
        <p className={styles.paragraph}>
          With a deep interest in backend architecture and clean code
          principles, I enjoy crafting efficient APIs, automating systems, and
          deploying real-world applications that solve meaningful problems.
        </p>
      </div>
    </section>
  );
}

export default About;
