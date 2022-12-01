
import React from "react";
import {FooterLink} from "design-system";

const Footer = () => {
    return (
        <footer className="footer">
            <FooterLink label="Contact " href="" />
            <FooterLink label="Conditions générales pdf" href="" />
            <p className="footer__credential">RIDE 2022 - tout droits reservés</p>
        </footer>
    );
}
export default Footer;