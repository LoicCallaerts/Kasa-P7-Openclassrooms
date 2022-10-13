// Import des éléments de style
import "../../style/stylePages/About.css";

// Import des assets
import BannerAboutXL from "../../assets/bannerAbout/bannerAboutXL.png";
import BannerAboutS from "../../assets//bannerAbout/bannerAboutS.png";

function About() {
  return (
    <main>
      <div id="banner">
        <img id="bannerXL" src={BannerAboutXL} alt="Bannière avec un paysage" />
        <img id="bannerS" src={BannerAboutS} alt="Bannière avec un paysage" />
        <div id="banner-bg"></div>
      </div>
      <div id="about-accordion">
        {/* Utilisation de l'élément HTML "details" qui permet de conserver et dévoiler/cacher des informations */}
        <details className="about-container">
          <summary className="about-title">
            Fiabilité <i className="fa-solid fa-chevron-down"></i>
          </summary>
          <p className="about-text">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </details>

        <details className="about-container">
          <summary className="about-title">
            Respect <i className="fa-solid fa-chevron-down"></i>
          </summary>
          <p className="about-text">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </details>

        <details className="about-container">
          <summary className="about-title">
            Service <i className="fa-solid fa-chevron-down"></i>
          </summary>
          <p className="about-text">
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </details>

        <details className="about-container">
          <summary className="about-title">
            Sécurité <i className="fa-solid fa-chevron-down"></i>
          </summary>
          <p className="about-text">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </details>
      </div>
    </main>
  );
}

export default About;
