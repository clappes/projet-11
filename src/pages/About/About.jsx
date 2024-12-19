import BannerAbout from "../../components/BannerAbout/BannerAbout";
import Accordion from '../../components/Accordion/Accordion';

function About() {
    return (
      <>
        <BannerAbout />
        <section className="accordion-section">
          <Accordion collapseTitle="Fiabilité" collapseText="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
          <Accordion collapseTitle="Respect" collapseText="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
          <Accordion collapseTitle="Service" collapseText="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
          <Accordion collapseTitle="Sécurité" collapseText="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
        </section>
      </>
    );
  }
  
  export default About;