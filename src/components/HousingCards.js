// Import des éléments de style
import "../style/styleComponents/HousingCards.css";

function HousingCards({ cover, title }) {
  return (
    <div className="housing-card">
      <img src={cover} alt="Logements" />
      <h2>{title}</h2>
    </div>
  );
}

export default HousingCards;
