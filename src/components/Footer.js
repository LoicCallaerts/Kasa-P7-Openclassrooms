// Import des éléments React
import { Link } from "react-router-dom";

//Import des éléments de style
import "../style/styleComponents/Footer.css";

// Import des assets
import Logo from "../assets/logo/logo.png";

function Footer() {
  return (
    <footer>
      <Link to="/">
        <img id="footer-logo" src={Logo} alt="Logo Kasa" />
      </Link>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
