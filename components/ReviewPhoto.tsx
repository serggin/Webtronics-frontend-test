import React from "react";
import Image from "next/image";

import styles from "../styles/Home.module.scss";

export interface ReviewPhotoProps {
  photo: string;
  objectPositions?: [number, number];
  isWide: boolean;
  width: number;
  height: number;
  scale?: number;
}

export default function ReviewPhoto({
  photo,
  objectPositions = [0, 0],
  isWide,
  width,
  height,
  scale = 1,
}: ReviewPhotoProps) {
  const reviewPhoto = isWide
    ? styles.reviewPhotoWide
    : styles.reviewPhotoNarrow;
  const reviewPhotoMask = isWide
    ? styles.reviewPhotoMaskWide
    : styles.reviewPhotoMaskNarrow;
  const reviewPhotoBorder = isWide
    ? styles.reviewPhotoBorderWide
    : styles.reviewPhotoBorderNarrow;
  const xPos = objectPositions[0] - (isWide ? 0 : 100);
  const objectPosition = `${xPos}px ${objectPositions[1]}px`;
  return (
    <div className={reviewPhoto}>
      <div className={reviewPhotoMask}>
        {/*<div>{message}</div>*/}
        <Image
          src={photo}
          width={width * scale}
          height={height * scale}
          alt="photo"
          style={{ objectPosition }}
        />
      </div>
      <div className={reviewPhotoBorder}></div>
    </div>
  );
}
