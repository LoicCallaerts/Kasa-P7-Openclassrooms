// Import des éléments React
import { Link } from "react-router-dom";

// Import des éléments du backend
import housing from "../../data/housing.json";

// Import des élément de style
import "../../style/stylePages/Home.css";

// Import des composant
import HousingCards from "../../components/HousingCards";

// Import des assets
import BannerXL from "../../assets/bannerHome/bannerHomeXL.png";
import BannerS from "../../assets/bannerHome/bannerHomeS.png";

function Home() {
  return (
    <main>
      <div id="title">
        <img
          id="title-bannerXL"
          src={BannerXL}
          alt="Bannière avec un paysage"
        />

        <img id="title-bannerS" src={BannerS} alt="Bannière avec un paysage" />
        <div id="title-bg"></div>
        <h1 id="title-home">Chez vous, partout et ailleurs</h1>
      </div>

      {/* Utilisation de la méthode map pour créer un nouveau tableau "card" à partir du fichier JSON*/}
      <div id="housing">
        {housing.map((cards) => (
          <Link
            className="housing-link"
            key={`${cards.id}`}
            to={`/housing/${cards.id}`}
          >
            <HousingCards
              key={`${cards.id}`}
              cover={cards.cover}
              title={cards.title}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Home;
