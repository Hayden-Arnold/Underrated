import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import Contactme from "../contactme/Contactme";

function Footer() {
  return (
    <nav className="footer">
      <Link className="contact" to="/contact">
        Contact Me
      </Link>
      <Contactme />
    </nav>
  );
}

export default Footer;
