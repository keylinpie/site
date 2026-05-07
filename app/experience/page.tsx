import styles from './page.module.css';

export default function Experience() {
  return (
    <div className={styles.mainContent}>
      <div className={styles.pageHeader}>
        <h1>Experience</h1>
        <p>My professional journey and skillset</p>
      </div>

      <div className={styles.timeline}>
        <div className={styles.timelineItem}>
          <div className={styles.timelineContent}>
            <h3>Senior Developer</h3>
            <div className={styles.company}>Tech Company Inc.</div>
            <div className={styles.date}>2024 - Present</div>
            <ul>
              <li>Led development of key features</li>
              <li>Mentored junior developers</li>
              <li>Improved system performance by 40%</li>
            </ul>
          </div>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineContent}>
            <h3>Full Stack Developer</h3>
            <div className={styles.company}>Startup Co.</div>
            <div className={styles.date}>2022 - 2024</div>
            <ul>
              <li>Built responsive web applications</li>
              <li>Implemented CI/CD pipelines</li>
              <li>Collaborated with cross-functional teams</li>
            </ul>
          </div>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineContent}>
            <h3>Junior Developer</h3>
            <div className={styles.company}>Software Solutions Ltd.</div>
            <div className={styles.date}>2020 - 2022</div>
            <ul>
              <li>Developed and maintained web applications</li>
              <li>Participated in code reviews</li>
              <li>Learned best practices and design patterns</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.skillsSection}>
        <h2>Skills & Technologies</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCategory}>
            <h3>Languages</h3>
            <ul>
              <li>JavaScript / TypeScript</li>
              <li>Python</li>
              <li>HTML / CSS</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h3>Frameworks</h3>
            <ul>
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Django</li>
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h3>Tools</h3>
            <ul>
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>VS Code</li>
              <li>Postman</li>
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h3>Other</h3>
            <ul>
              <li>REST APIs</li>
              <li>Database Design</li>
              <li>Agile / Scrum</li>
              <li>UI/UX Principles</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
