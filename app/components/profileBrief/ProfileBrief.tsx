import React from "react";
import styles from "./ProfileBrief.module.css";

interface ProfileBriefProps {
  imgUrl: string;
  alt: string;
  text: string;
}

const ProfileBrief = ({ imgUrl, alt, text }: ProfileBriefProps) => {
  return (
    <div className={styles.profileBrief}>
      <div className={styles.imgContainer}>
        <img src={imgUrl} alt={alt} />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default ProfileBrief;
