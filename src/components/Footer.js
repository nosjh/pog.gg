import React from "react";
import "../styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <img
        className="footer-logo"
        src={process.env.PUBLIC_URL + "/img/logo_pog.svg"}
      />
      <p className="Poppins-Light font-11-10">
        POG.GG isn’t endorsed by Riot Games and doesn’t reflect the views or
        opinions of Riot Games or anyone officially involved in producing or
        managing League of Legends. League of Legends and Riot Games are
        trademarks or registered trademarks of Riot Games, Inc. League of
        Legends © Riot Games, Inc.
      </p>
    </footer>
  );
}

export default Footer;
