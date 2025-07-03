import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const linkStyle = ({ isActive }) => {
    return isActive ? "text-orange-500 font-bold" : "text-black";
  };
  return (
    <>
      <div className="flex justify-between">
        <h1>logo</h1>
        <ul className="flex gap-10">
          <NavLink to="" className={linkStyle}>
            <li> Home</li>
          </NavLink>
          <NavLink to="about" className={linkStyle}>
            <li>About</li>
          </NavLink>
          <NavLink to="contact" className={linkStyle}>
            <li> Conatct</li>
          </NavLink>
          <NavLink to="projects" className={linkStyle}>
            <li> Projects</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
