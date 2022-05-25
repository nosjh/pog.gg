import React from "react";
import "../styles/Header.scss";

function Header() {
  return (
    <header>
      <img src={process.env.PUBLIC_URL + "/img/logo_pog.svg"} />
    </header>
  );
}

export default Header;
