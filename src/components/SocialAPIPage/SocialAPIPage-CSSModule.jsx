import React from 'react';
import styles from './SocialAPIPage.module.css';

export default function SocialAPIPageCSSModule() {
  return (
    <div className={styles.pageContainer}>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <h1 className={styles.navbarTitle}>Social API</h1>
      </nav>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Centered Box */}
        <div className={styles.contentBox}>
          <h2>Welcome to Social API</h2>
          <p>
            Your gateway to social media integration and data management. 
            Build powerful applications with our comprehensive API.
          </p>
          <button className={styles.btn}>Get Started</button>
        </div>
      </main>
    </div>
  );
}
