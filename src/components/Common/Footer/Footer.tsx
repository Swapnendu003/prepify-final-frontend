'use client'
import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          
          <img src="https://i.postimg.cc/J0tLr1BX/prepify.png" width={150} height={150} style={{marginLeft: 80, marginBottom: -20, marginTop: -10}} alt="" />
        </div>
        <div className={styles.column}>
          <h3 className={styles.title}>Home</h3>
        </div>
        <div className={styles.column}>
          <h3 className={styles.title}>Services</h3>
          <p>AI - Learner</p>
          <p>Your View</p>
        </div>
        <div className={styles.column}>
          <h3 className={styles.title}>Contact Us</h3>
          <p>+91 999999999</p>
          <p>hellothisissuto23@gmail.com</p>
        </div>
        <div className={styles.column}>
          <h3 className={styles.title}>About Us</h3>
          <p>Made by:</p>
          <p>Swapnendu Banerjee</p>
          <p>Sagnik Datta</p>
          <p>Adrita Chakraborty</p>
          <p>Moyukh Chowdhury</p>
        </div>
      </div>
      <div className={styles.socials}>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src="https://i.postimg.cc/Qxcr24gM/github.png" alt="GitHub" className={styles.icon} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="https://i.postimg.cc/xjw2FDz7/linkedin.png" alt="LinkedIn" className={styles.icon} />
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
          <img src="https://i.postimg.cc/G38RQhHG/3d-icon-discord.png" alt="Discord" className={styles.icon} />
        </a>
      </div>
      <div className={styles.bottom}>
        <p>&copy; 2024 - All Rights Reserved</p>
        <p>Privacy</p>
      </div>
    </footer>
  );
};

export default Footer;
