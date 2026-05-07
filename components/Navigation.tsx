'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          keylinpie
        </Link>
        <div className={styles.menuToggle} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`${styles.navMenu} ${menuOpen ? styles.active : ''}`}>
          <li>
            <Link 
              href="/" 
              className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/experience" 
              className={`${styles.navLink} ${isActive('/experience') ? styles.active : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link 
              href="/projects" 
              className={`${styles.navLink} ${isActive('/projects') ? styles.active : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
