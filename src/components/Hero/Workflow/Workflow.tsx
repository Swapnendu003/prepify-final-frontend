// components/Workflow.tsx
import React from 'react';
import styles from './Workflow.module.css';

const Workflow = () => {
  return (
    <div className={styles.workflow}>
      <h2 className={styles.header}>Your Learning Journey</h2>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles.icon}>📘</div>
          <h3 className={styles.title}>Step 1: Learn from Modules</h3>
          <p className={styles.description}>
            Browse through comprehensive learning modules covering various topics. Each module is designed to build your knowledge step-by-step.
          </p>
        </div>
        <div className={styles.step}>
          <div className={styles.icon}>📝</div>
          <h3 className={styles.title}>Step 2: Attend Quizzes</h3>
          <p className={styles.description}>
            Test your understanding by attending quizzes after each module. Immediate feedback helps you identify areas for improvement.
          </p>
        </div>
        <div className={styles.step}>
          <div className={styles.icon}>🪙</div>
          <h3 className={styles.title}>Step 3: Earn Coins</h3>
          <p className={styles.description}>
            Earn coins for every quiz you complete. Coins can be redeemed for rewards, providing an extra incentive to keep learning.
          </p>
        </div>
        <div className={styles.step}>
          <div className={styles.icon}>📚</div>
          <h3 className={styles.title}>Step 4: Learn with PREPIA</h3>
          <p className={styles.description}>
            Engage in interactive lessons with PREPIA, an AI-powered learning assistant. PREPIA helps you with personalized guidance and tips.
          </p>
        </div>
        <div className={styles.step}>
          <div className={styles.icon}>🎤</div>
          <h3 className={styles.title}>Step 5: Take AI Based Interview Test</h3>
          <p className={styles.description}>
            Prepare for real-world scenarios with AI-based interview tests. Receive feedback to improve your skills and confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
