import { useState } from "react";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

import "./style.scss";

const SideBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <>
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        <nav className="navBar">
          <button className="navBar__button" onClick={handleToggle}>
            {navbarOpen ? <FiX /> : <FiMenu />}
          </button>
        </nav>
        <div className="search__icon">
          <FiSearch />
        </div>
      </ul>
      {navbarOpen ? (
        <ul className="header__menu__links">
          <li>
            <NavLink style={({ isActive }) => (isActive ? {} : {})} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => (isActive ? {} : {})} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => (isActive ? {} : {})} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      ) : null}
    </>
  );
};

export default SideBar;
