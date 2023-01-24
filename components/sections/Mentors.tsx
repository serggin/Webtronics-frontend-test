import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import mentorsLine from "../../assets/images/mentors-line.svg";
import Mentor, { MentorProps } from "../Mentor";

const mentors: MentorProps[] = [
  {
    photo: "/images/Wade Warren.jpg",
    name: "Wade Warren",
    text: "Front-end engineers work closely with designers",
  },
  {
    photo: "/images/KristinWatson.jpg",
    name: "Kristin Watson",
    text: "Front-end engineers work closely with designers",
    style: { alignSelf: "flex-start" },
  },
  {
    photo: "/images/Robert Fox.jpg",
    name: "Robert Fox",
    text: "Front-end engineers work closely with designers",
  },
];

export default function Mentors() {
  return (
    <div className={styles.mentorsGroup}>
      <h3>Mentors</h3>
      <Image src={mentorsLine} className={styles.mentorsLine} alt="" />
      <div className={styles.mentors}>
        {mentors.map((mentor) => (
          <Mentor {...mentor} key={mentor.name} />
        ))}
      </div>
    </div>
  );
}
