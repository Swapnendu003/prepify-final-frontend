'use client'
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./Timeline.module.css";

import { useRouter } from "next/navigation";



interface StepType {
  icon: string;
  title: string;
  description: string;
}

const steps: StepType[] = [
  {
    icon: "📘",
    title: "Learn from Modules",
    description:
      "Browse through comprehensive learning modules covering various topics. Each module is designed to build your knowledge step-by-step.",
  },
  {
    icon: "📝",
    title: "Attend Quizzes",
    description:
      "Test your understanding by attending quizzes after each module. Immediate feedback helps you identify areas for improvement.",
  },
  {
    icon: "🪙",
    title: "Earn Coins",
    description:
      "Earn coins for every quiz you complete. Coins can be redeemed for rewards, providing an extra incentive to keep learning.",
  },
  {
    icon: "📚",
    title: "Learn with PREPIA",
    description:
      "Engage in interactive lessons with PREPIA, an AI-powered learning assistant. PREPIA helps you with personalized guidance and tips.",
  },
  {
    icon: "🎤",
    title: "Take AI Based Interview Test",
    description:
      "Prepare for real-world scenarios with AI-based interview tests. Receive feedback to improve your skills and confidence.",
  },
];

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [clicked, setClicked] = useState(false);
  const Router = useRouter();

  const handleClick = () => {
    setClicked(true);
  
    console.log("Clicked");
    Router.push("/services")

  };

  return (
    <>
      <div className={styles.timeline}>
        <img
          src="https://i.postimg.cc/GpdK6kTs/Group-23.png"
          alt=""
          className="bgimg2"
        />

        <img
          src="https://i.postimg.cc/GpdK6kTs/Group-23.png"
          alt=""
          className="bgimg3"
        />
        <h2 className={styles.header}>Your Learning Journey</h2>
        <img
          src="https://i.postimg.cc/zvxYRzmx/2.png"
          alt=""
          style={{ marginTop: "-3rem" }}
        />
        <div className={styles.centralLine}>
          <div
            className={styles.studentIcon}
            style={{ top: `${activeStep * 20}%` }}
          >
            🎓
          </div>
        </div>
        {steps.map((step, index) => (
          <Step
            key={index}
            step={step}
            index={index}
            setActiveStep={setActiveStep}
          />
        ))}
      </div>

      <div
        className=" mt-5  hover:bg-sky-950"
        style={{ marginLeft: "21rem", marginRight: "44rem" }}
        onClick={handleClick}
      >
        <a
          className="btn"
          style={{
            backgroundColor: "#23A6F0",
            color: "white",
            margin: "auto",
            width: "50rem",
          }}
        >
          Get Started
        </a>
      </div>
    </>
  );
};

interface StepProps {
  step: StepType;
  index: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

const Step: React.FC<StepProps> = ({ step, index, setActiveStep }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    onChange: (inView) => {
      if (inView) setActiveStep(index);
    },
  });

  return (
    <>
      <div
        ref={ref}
        className={`${styles.step} ${inView ? styles.visible : ""} ${
          index % 2 === 0 ? styles.left : styles.right
        }`}
      >
        <div className={styles.content}>
          <div className={styles.icon}>{step.icon}</div>
          <div>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.description}>{step.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
