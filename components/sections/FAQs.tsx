import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import question from "../../assets/images/question.svg";
import Faq, { FaqProps } from "../Faq";

const faqs: FaqProps[] = [
  {
    question: "What is the price?",
    answer:
      "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
  },
  {
    question: "What is the price?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "What is the price?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "What is the price?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "What is the price?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | undefined>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex((openIndex) => (index === openIndex ? undefined : index));
  };

  return (
    <div id="faqs" className={styles.faqs}>
      <h2>Frequently Asked Questions</h2>
      <div className={styles.faqContent}>
        <div className={styles.faqContentLeft}>
          <div className={styles.text}>
            {`Do you have any kind of questions?
We are here to help.`}
          </div>
          <Image src={question} className={styles.questionImage} alt="" />
        </div>
        <div className={styles.faqContentRight}>
          {faqs.map((faq, index) => (
            <Faq
              {...faqs[index]}
              isOpen={index === openIndex}
              index={index}
              toggleOpen={toggleOpen}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
