import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Welcome</h1>
        <h2>Developer & Creator</h2>
        <p>Building innovative solutions and bringing ideas to life through code.</p>
        <div className={styles.ctaButtons}>
          <Link href="/projects" className={`${styles.btn} ${styles.btnPrimary}`}>
            View Projects
          </Link>
          <Link href="/contact" className={`${styles.btn} ${styles.btnSecondary}`}>
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
