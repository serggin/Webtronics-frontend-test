import React, { useState } from "react";
import styles from "../../styles/Home.module.scss";

export default function Gallery() {
  return (
    <div className={styles.gallery}>
      <h2>Gallery</h2>
      <div className={styles.galleryContent}>
        <div className={styles.galleryContentLeft}>
          <div className={styles.textLeft}>
            By the end of this course, you will be able to develop and publish
            your very own Google Chrome extension! In this course we will focus
            on coding exercises and projects.
          </div>
          <div className={styles.image4} />
        </div>
        <div className={styles.galleryContentMain}>
          <div className={styles.galleryImagesMain}>
            <div className={styles.image1} />
            <div className={styles.galleryContentRIght}>
              <div className={styles.image2} />
              <div className={styles.image3} />
            </div>
          </div>
          <div className={styles.textRight}>
            If you would like to learn web development and get a job in the tech
            industry, you are going to LOVE this course! Learn HTML, CSS,
            JavaScript, Bootstrap and more with over 15 hours of HD video
            tutorials! This course was designed to be extremely beginner
            friendly. We will begin with the very basics of HTML and build a
            simple web page.
          </div>
        </div>
      </div>
    </div>
  );
}
