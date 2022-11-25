
import React from "react";
import {FooterLink} from "design-system";

const Footer = () => {
    return (
        <footer className="footer">
            <FooterLink label="Contact " destination="" />
            <FooterLink label="Conditions générales pdf" destination="" />
            <p className="footer__credential">RIDE 2022 - tout droits reservés</p>
        </footer>
    );
}
export default Footer;