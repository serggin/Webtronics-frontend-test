import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import Program, { ProgramProps } from "../Program";
import angular from "../../assets/images/angular.svg";
import react from "../../assets/images/react.svg";
import vue from "../../assets/images/vue.svg";
import js from "../../assets/images/js.svg";

const programs: ProgramProps[] = [
  {
    logo: angular,
    title: "Angular",
  },
  {
    logo: react,
    title: "React",
  },
  {
    logo: vue,
    title: "Vue",
  },
  {
    logo: js,
    title: "JavaScript",
  },
];

export default function Programs() {
  return (
    <div className={styles.programs}>
      {programs.map((program) => (
        <Program {...program} key={program.title} />
      ))}
    </div>
  );
}
