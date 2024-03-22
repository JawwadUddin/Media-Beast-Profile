import React from "react";
import styles from "./ProfileBrief.module.css";

interface ProfileBriefProps {
  imgUrl: string;
  imgAlt: string;
  text: string;
}

const ProfileBrief = ({ imgUrl, imgAlt, text }: ProfileBriefProps) => {
  return (
    <div className={styles.profileBrief}>
      <div className={styles.imgContainer}>
        <img src={imgUrl} alt={imgAlt} />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default ProfileBrief;
