import React from "react";

const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <div className="max-w-full text-center">
      <footer>Modern Store &copy; {currYear}</footer>
    </div>
  );
};

export default Footer;
