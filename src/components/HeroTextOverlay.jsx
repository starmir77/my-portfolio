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
          setTimeout(loop, 1000); // delay before next word
        },
      });
    };

    document.fonts.ready.then(() => {
      if (!isCancelled) loop();
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
          I started in product management, built a startup in the AR space, and realized I was most fulfilled when designing and building hands-on. I’ve since shifted focus toward creative technology—blending design, code, and emerging tech to build products and experiences that push boundaries.
        </p>
      </div>
    </div>
  );
}
