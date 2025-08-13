import Work from "../components/Work";
import Navbar from "../components/Navbar";
import {  workProjects } from "../data/homePage";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CanvasHero from "../components/CanvasHero";


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
        <Work
          id="work"
          work={workProjects}
          variant="default"
        />
      </div>
    </>
  );
}

export default Home;
