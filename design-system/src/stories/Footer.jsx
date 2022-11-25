
import React from "react";

import "../style/Footer.css"
import {FooterLink} from "./FooterLink";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <FooterLink label="Contact " destination="" />
      <FooterLink label="Conditions générales pdf " destination="" />
      <p className="footer__copyrigth">RIDE 2022 - tout droits reservés</p>
    </footer>
  );
};
