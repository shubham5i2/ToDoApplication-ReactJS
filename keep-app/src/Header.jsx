import React from "react";
import keep from "./Images/keep.jpg";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={keep} alt="logo" />
        <h1>SKS Keep<span>!</span></h1>
      </div>
    </>
  );
};

export default Header;
