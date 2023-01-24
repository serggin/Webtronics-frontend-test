import React from "react";
import styles from "../../styles/Home.module.scss";

import Step, { StepProps } from "../Step";

const steps: StepProps[] = [
  {
    index: 1,
    title: "Introduction to Front-End",
    text: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.",
  },
  {
    index: 2,
    title: "Overview of Development",
    text: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.",
  },
  {
    index: 3,
    title: "Introduction to Front-End",
    text: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.",
  },
  {
    index: 4,
    title: "Overview of Development",
    text: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.",
  },
  {
    index: 5,
    title: "Introduction to Front-End",
    text: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.",
  },
  {
    index: 6,
    title: "Overview of Development",
    text: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.",
  },
];

export default function StepsGroup() {
  return (
    <div className={styles.stepsGroup}>
      {steps.map((step) => (
        <Step {...step} key={step.index} />
      ))}
    </div>
  );
}
