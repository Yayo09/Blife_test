import React, { useState } from "react";
import "../styles/_header.scss";
import logo from "../img/Logo.png";
import search from "../img/Search.png";
import shopping from "../img/Shopping.png";
import user from "../img/user.png";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <nav className="nav">
        <div className="hamburger" onClick={toggleNav}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={`nav-list ${isActive ? "active" : ""}`}>
          <li>
            <a href="#">Productos</a>
          </li>
          <li className="promo">
            <a href="#">Promociones</a>
          </li>
          <li className="nosotros">
            <a href="#">Nosotros</a>
          </li>
        </ul>
      </nav>

      <div className="icons">
        <span>
          <img src={search} alt="search" />
        </span>
        <span>
          <img src={shopping} alt="shopping" />
        </span>
        <span>
          <img src={user} alt="user" />
        </span>
      </div>
    </header>
  );
};

export default Header;
