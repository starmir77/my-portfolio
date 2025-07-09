import Hero from "../components/Hero";
import Work from "../components/Work";
import Navbar from "../components/Navbar";
import ContactMe from "../components/ContactMe";
import { contactMe, intro, workProjects, workTitle } from "../data/homePage";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CanvasHero from "../components/CanvasHero";

function Home() {
  return (
    <>
      <Navbar />
      <div style={{ position: 'relative', minHeight: '100vh' }}><CanvasHero></CanvasHero></div>

    </>
  );
}

export default Home;
