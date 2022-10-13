// Import des élément React
import { Link, useLocation } from "react-router-dom";

// Import des élément de style
import "../style/styleComponents/Header.css";

// Import des assets
import Logo from "../assets/logo/logo.png";

function Header() {
  const pathname = useLocation().pathname;
  return (
    <header>
      <Link to="/">
        <img id="header-logo" src={Logo} alt="Logo Kasa" />
      </Link>

      <nav>
        {/* Si le nom de l'URL est égal à "/" (section "accueil"), alors navi-link deviens link active */}
        <Link
          className={`${pathname === "/" ? "nav-link-active" : "nav-link"}`}
          aria-label="Lien pour revenir à l'Accueil'"
          to="/"
        >
          Accueil
        </Link>

        {/* Si le nom de l'URL est égal à "/about" (section "A propos"), alors navi-link deviens link active */}
        <Link
          className={`${
            pathname === "/about" ? "nav-link-active" : "nav-link"
          }`}
          aria-label="Lien pour en savoir plus sur nous"
          to="/about"
        >
          A Propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
