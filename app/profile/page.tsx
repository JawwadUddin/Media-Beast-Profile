import React from "react";
import styles from "./Profile.module.css";
import ProfileCard from "../components/profileCard/ProfileCard";

const Profile = () => {
  return (
    <div className="flex flex-col justify-center items-center p-8">
      <div className={styles.profile}>
        {/* DayDay Logo section */}

        <div className={styles.logo}>
          <img
            className="w-full h-full object-cover"
            src="/images/DayDayLogoRebrand_2.png"
            alt="DayDay Logo Brand"
          />
        </div>

        {/* Profile card section */}

        <ProfileCard imgUrl="/images/Profile%20Image.png" />
      </div>
    </div>
  );
};

export default Profile;
