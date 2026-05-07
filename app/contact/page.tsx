'use client';

import { FormEvent } from 'react';
import styles from './page.module.css';

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form. In production, this would send your message.');
    e.currentTarget.reset();
  };

  return (
    <div className={styles.mainContent}>
      <div className={styles.pageHeader}>
        <h1>Get in Touch</h1>
        <p>Let's connect and collaborate</p>
      </div>

      <div className={styles.contactGrid}>
        <div className={styles.contactCard}>
          <div className={styles.contactIcon}>📧</div>
          <h3>Email</h3>
          <a href="mailto:hello@keylinpie.com">hello@keylinpie.com</a>
        </div>

        <div className={styles.contactCard}>
          <div className={styles.contactIcon}>💼</div>
          <h3>LinkedIn</h3>
          <a href="https://linkedin.com/in/keylinpie" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/keylinpie
          </a>
        </div>

        <div className={styles.contactCard}>
          <div className={styles.contactIcon}>🐙</div>
          <h3>GitHub</h3>
          <a href="https://github.com/keylinpie" target="_blank" rel="noopener noreferrer">
            github.com/keylinpie
          </a>
        </div>
      </div>

      <div className={styles.contactForm}>
        <h2>Send a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className={styles.submitBtn}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
