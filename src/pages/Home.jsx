import Hero from "../components/Hero";
import Work from "../components/Work";
import Navbar from "../components/Navbar";
import ContactMe from "../components/ContactMe";
import { contactMe, intro, workProjects, workTitle } from "../data/homePage";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CanvasHero from "../components/CanvasHero";
import HeroTextOverlay from "../components/HeroTextOverlay.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <CanvasHero variant="global" />
      <div style={{ marginBottom: "8rem" }}>
        <HeroTextOverlay />
        <div style={{ marginBottom: "0rem" }}>
          <Work
            title="Design Work"
            description="A collection of work shaped to solve real problems through research and human-centered thinking."
            work={workProjects}
            variant = "default"
          />
        </div>
        <div style={{ marginBottom: "5rem" }}>
          <Work
            title="Creative Code"
            description="Explorations, prototypes, and experiments where I test ideas, play with interaction, and push the boundaries of code and creativity."
            work={workProjects}
            variant = "alt"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
