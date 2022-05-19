import React from "react";
import "../styles/Header.scss";
import logo from "../img/logo_pog.svg";

function Header() {
  return (
    <header>
      <img src={logo} />
    </header>
  );
}

export default Header;
