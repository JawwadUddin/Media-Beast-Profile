import React from "react";

const Footer = () => {
  return (
    <div
      className="flex items-center gap-2 text-white"
      style={{
        fontFamily: "Apercu",
        fontSize: "11px",
        fontWeight: 400,
        letterSpacing: "2px",
      }}
    >
      POWERED BY
      <img
        src="/images/Plain%20White%20Logo.png"
        alt="bloco logo"
        style={{ height: "11px" }}
      />
    </div>
  );
};

export default Footer;
