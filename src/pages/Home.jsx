import Hero from "../components/Hero";
import Work from "../components/Work";
import Navbar from "../components/Navbar";
import ContactMe from "../components/ContactMe";
import { contactMe, intro, workProjects, workProjectsCode, workTitle } from "../data/homePage";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CanvasHero from "../components/CanvasHero";
import HeroTextOverlay from "../components/HeroTextOverlay.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  const location = useLocation();

  useEffect(() => {
    const scrollTarget = location.state?.scrollTo;
    if (scrollTarget) {
      const element = document.getElementById(scrollTarget);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      window.history.replaceState({}, document.title);
    }
  }, [location]);


  return (
    <>
      <Navbar />
      <CanvasHero variant="global" />
      <div style={{ marginBottom: "8rem" }}>
        <HeroTextOverlay />
        <div style={{ marginBottom: "8rem" }}>
          <Work
            id="work"
            title={
              <>
                Design<br />
                Work
              </>
            }
            description="Research-led, design-driven work focused on solving product problems."
            work={workProjects}
            variant="default"
          />
        </div>
        <div style={{ marginBottom: "5rem" }}>
          <Work
            id="coding"
            title="Code & Prototyping"
            description="Projects I’ve designed, developed, and shipped using AI, APIs, and emerging technologies."
            work={workProjectsCode}
            variant="alt"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
