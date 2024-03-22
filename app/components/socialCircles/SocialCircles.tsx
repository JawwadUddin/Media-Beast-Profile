import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
  FaSnapchatGhost,
} from "react-icons/fa";

interface SocialCirclesProps {
  fbUrl?: string;
  xUrl?: string;
  instaUrl?: string;
  ytUrl?: string;
  tiktokUrl?: string;
  whatsappUrl?: string;
  snapchatUrl?: string;
}

const SocialCircles = ({
  fbUrl,
  xUrl,
  instaUrl,
  ytUrl,
  tiktokUrl,
  whatsappUrl,
  snapchatUrl,
}: SocialCirclesProps) => {
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
      {xUrl && (
        <a
          href={xUrl}
          target="_blank"
          rel="noopener noreferrer"
          className=" w-9 h-9 rounded-full bg-black flex items-center justify-center"
        >
          <FaXTwitter color="white" />
        </a>
      )}
      {instaUrl && (
        <a
          href={instaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className=" w-9 h-9 rounded-full bg-black flex items-center justify-center"
        >
          <FaInstagram color="white" />
        </a>
      )}
      {ytUrl && (
        <a
          href={ytUrl}
          target="_blank"
          rel="noopener noreferrer"
          className=" w-9 h-9 rounded-full bg-black flex items-center justify-center"
        >
          <FaYoutube color="white" />
        </a>
      )}
      {tiktokUrl && (
        <a
          href={tiktokUrl}
          target="_blank"
          rel="noopener noreferrer"
          className=" w-9 h-9 rounded-full bg-black flex items-center justify-center"
        >
          <FaTiktok color="white" />
        </a>
      )}
      {whatsappUrl && (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className=" w-9 h-9 rounded-full bg-black flex items-center justify-center"
        >
          <FaWhatsapp color="white" />
        </a>
      )}
      {snapchatUrl && (
        <a
          href={snapchatUrl}
          target="_blank"
          rel="noopener noreferrer"
          className=" w-9 h-9 rounded-full bg-black flex items-center justify-center"
        >
          <FaSnapchatGhost color="white" />
        </a>
      )}
    </div>
  );
};

export default SocialCircles;
