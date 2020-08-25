import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="sidenav">
      <ul>
        <li>
          <Link to="Home">Home</Link>
        </li>
        <li>
          <Link to="About">About Us</Link>
        </li>
        <li>
          <Link to="Contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
