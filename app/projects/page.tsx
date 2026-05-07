import Link from 'next/link';
import { projects } from '@/data/projects';
import styles from './page.module.css';

export default function Projects() {
  return (
    <div className={styles.mainContent}>
      <div className={styles.pageHeader}>
        <h1>Projects</h1>
        <p>Things I've built and worked on</p>
      </div>

      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <Link 
            key={project.id} 
            href={`/projects/${project.id}`}
            className={styles.projectCard}
          >
            <div className={styles.projectImage}>{project.icon}</div>
            <div className={styles.projectContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.projectTags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <div className={styles.projectLink}>
                View Details →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
