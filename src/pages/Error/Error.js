// Import des élément React
import { Link } from "react-router-dom";
// Import des élément de style
import "../../style/stylePages/Error.css";

function Error() {
  return (
    <main>
      <div id="error">
        <span>404</span>
        <p id="error-text">Oups! La page que vous demandez n'existe pas.</p>
        <Link
          id="error-link"
          to="/"
          aria-label="Retourner sur la page d'acceuil"
        >
          Retourner sur la page d’accueil
        </Link>
      </div>
    </main>
  );
}

export default Error;
