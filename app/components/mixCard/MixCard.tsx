import React from "react";
import styles from "./MixCard.module.css";
import { ImSoundcloud } from "react-icons/im";

interface MixCardProps {
  imgUrl: string;
  imgAlt: string;
  header: string;
  text: string;
  time: string;
}

const MixCard = ({ imgUrl, imgAlt, header, text, time }: MixCardProps) => {
  return (
    <div className={styles.mixCard}>
      <div className={styles.imgContainer}>
        <img src={imgUrl} alt={imgAlt} />
      </div>
      <div className={styles.content}>
        <ImSoundcloud className={styles.soundCloud} color="white" />
        <div className={styles.header}>{header}</div>
        <div className={styles.text}>{text}</div>
        <div className={styles.time}>{time}</div>
      </div>
    </div>
  );
};

export default MixCard;
