import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

import "./style.scss";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div className="header">
        <div className="header__logo">imdb</div>
        <div className="header__menu">
          <ul className="header__menu__links">
            <li>
              <NavLink className="nav__menu" style={({ isActive }) => (isActive ? {} : {})} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="nav__menu" style={({ isActive }) => (isActive ? {} : {})} to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className="nav__menu" style={({ isActive }) => (isActive ? {} : {})}to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
            className="search__input"
          />
          <div className="search__icon">
            <FiSearch />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
