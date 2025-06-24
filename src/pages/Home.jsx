import Hero from "../components/Hero";
import Work from "../components/Work";
import Navbar from "../components/Navbar";
import ContactMe from "../components/ContactMe";
import { contactMe, intro, workProjects, workTitle } from "../data/homePage";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Hero
        heroInfo={intro}
      />
      <Work
        title={workTitle}
        work={workProjects}
      />
      <ContactMe
        contact={contactMe}
      />
    </>
  );
}

export default Home;
