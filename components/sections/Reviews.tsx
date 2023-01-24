import React, { useState } from "react";
import styles from "../../styles/Home.module.scss";
import ArrowButton from "../ArrowButton";
import ReviewPhoto, { ReviewPhotoProps } from "../ReviewPhoto";

const reviews: Omit<
  ReviewPhotoProps & { title: string; text: string },
  "isWide"
>[] = [
  {
    title: "Best courses ever",
    text: 'Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.',
    photo: "/images/man1.jpg",
    width: 633,
    height: 422,
    objectPositions: [-125, 0],
  },
  {
    title: "Amazing teaching",
    text: "The explanation is crazy it really doesn't have a structure to go from point A to point B. He starts to explain something then he change his mind and start with another thing an so on. If you try to learn pro active by doing the same thing with him all along you will get confused and start to loose interest.",
    photo: "/images/woman1.jpg",
    width: 294,
    height: 441,
    objectPositions: [0, -70],
    scale: 1.33,
  },
  {
    title: "Simple and easy",
    text: "I am really enjoying the experience of learning a new skill I used to believe that web design was way too complicated for me to learn but so far in this course I have been keeping up and having fun.",
    photo: "/images/man2.jpg",
    width: 282,
    height: 422,
    objectPositions: [0, -70],
    scale: 1.39,
  },
];
const indices = Array.from(
  { length: reviews.length * 2 - 1 },
  (_, index) => index % reviews.length
);
const SHOW_REVIEWS = 3;

export default function Reviews() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const showIndices = indices.slice(reviewIndex, reviewIndex + SHOW_REVIEWS);
  //  const showReviews = reviews.slice(reviewIndex, reviewIndex + SHOW_REVIEWS);

  const onClickLeft = () => {
    setReviewIndex(
      (reviewIndex) => (reviewIndex + reviews.length - 1) % reviews.length
    );
  };
  const onClickRight = () => {
    setReviewIndex((reviewIndex) => (reviewIndex + 1) % reviews.length);
  };

  return (
    <div className={styles.reviews}>
      <h2>Review</h2>
      <div className={styles.reviewsContent}>
        <div className={styles.reviewsContentLeft}>
          <h3>{reviews[reviewIndex].title}</h3>
          <div className={styles.text}>{reviews[reviewIndex].text}</div>
        </div>
        <div className={styles.reviewsContentRight}>
          <div className={styles.reviewsControls}>
            <div className={styles.reviewIndexText}>
              <span className={styles.reviewIndex}>{reviewIndex + 1}/</span>
              <span className={styles.reviewAmount}>
                {" " + reviews.length}
              </span>
            </div>
            <div className={styles.arrowButtons}>
              <ArrowButton type="left" onClick={onClickLeft} />
              <ArrowButton type="right" onClick={onClickRight} />
            </div>
          </div>
          <div className={styles.reviewsPhotos}>
            {showIndices.map((index, i) => {
              const review = reviews[index];
              return (
                <ReviewPhoto
                  photo={review.photo}
                  isWide={i === 0}
                  width={review.width}
                  height={review.height}
                  objectPositions={review.objectPositions}
                  scale={review.scale}
                  key={review.photo}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
