import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectById, projects } from '@/data/projects';
import styles from './page.module.css';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className={styles.mainContent}>
      <Link href="/projects" className={styles.backLink}>
        ← Back to Projects
      </Link>

      <div className={styles.projectHeader}>
        <div className={styles.projectHero}>{project.icon}</div>
        <h1>{project.title}</h1>
        <div className={styles.projectMeta}>
          <div className={styles.metaItem}>📅 {project.year}</div>
          <div className={styles.metaItem}>⏱️ {project.duration}</div>
          <div className={styles.metaItem}>👥 {project.team}</div>
        </div>
        <div className={styles.projectTags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div className={styles.projectContent}>
        <div className={styles.contentSection}>
          <h2>Overview</h2>
          <p>{project.overview}</p>
        </div>

        <div className={styles.contentSection}>
          <h2>Key Features</h2>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2>Technical Details</h2>
          <p>{project.technical}</p>
        </div>

        {project.challenges && (
          <div className={styles.contentSection}>
            <h2>Challenges & Solutions</h2>
            <p>{project.challenges}</p>
          </div>
        )}

        <div className={styles.projectLinks}>
          <a href="#" className={`${styles.btn} ${styles.btnPrimary}`}>Live Demo</a>
          <a href="#" className={`${styles.btn} ${styles.btnSecondary}`}>View Code</a>
        </div>
      </div>
    </div>
  );
}
