import React from "react";
import { GrFacebookOption } from "react-icons/gr";

interface SocialCirclesProps {
  fbUrl?: string;
}

const SocialCircles = ({ fbUrl }: SocialCirclesProps) => {
  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {fbUrl && (
        <a
          href={fbUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-black flex justify-center items-center"
        >
          <GrFacebookOption color="white" />
        </a>
      )}
    </div>
  );
};

export default SocialCircles;
