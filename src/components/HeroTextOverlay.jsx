import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

export default function HeroTextOverlay() {
  const scrambleRef = useRef(null);
  const roles = ["Design Technologist", "Designer", "Coder"];

  useEffect(() => {
    if (!scrambleRef.current) return;

    let index = 0;
    let isCancelled = false;

    const loop = () => {
      gsap.to(scrambleRef.current, {
        scrambleText: {
          text: roles[index],
          chars: "upperCase",
          speed: 0.3,
          revealDelay: 0.2,
        },
        duration: 2,
        ease: "power2.out",
        onComplete: () => {
          index = (index + 1) % roles.length;
          setTimeout(loop, 1000);
        },
      });
    };

    document.fonts.ready.then(() => {
      if (!isCancelled) {
        if (scrambleRef.current) loop();
      }
    });

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div className="hero-text-overlay">
      <div className="hero-text-wrapper">
        <h1>Rafaela Baquero</h1>
        <h2 ref={scrambleRef}>Designer</h2>
        <p>
          Hi!  I’m a product-minded designer who works across UX, strategy and code. I design with intent and build when needed, using AI and emerging tech to explore new directions and bring the right ideas to life. Outside of work, I enjoy cycling, Korean cinema, and existential philosophy.
        </p>
        <div className="home-buttons">
          <a href="/#work" className="hero-button">View Work</a>
          <a href="mailto:rafaellabaquero@gmail.com?subject=Let's%20Connect" className="hero-button">Contact Me</a>
        </div>
      </div>
    </div>
  );
}
