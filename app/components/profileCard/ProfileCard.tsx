import React from "react";
import styles from "./ProfileCard.module.css";

interface ProfileCardProps {
  imgUrl: string;
}

const ProfileCard = ({ imgUrl }: ProfileCardProps) => {
  return (
    <div className={styles.profileCard}>
      <img
        src={imgUrl}
        alt="Profile image"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ProfileCard;
