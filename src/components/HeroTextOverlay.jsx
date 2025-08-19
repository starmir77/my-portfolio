import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

export default function HeroTextOverlay() {
  const scrambleRef = useRef(null);
  const roles = ["Design Engineer", "Designer", "Coder"];

  useLayoutEffect(() => {
    if (!scrambleRef.current) return;

    let index = 0;
    let mounted = true;
    let timeoutId;
    const el = scrambleRef.current;

    if (!el) return;

    const run = () => {
      if (!mounted || !scrambleRef.current) return;
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
          if (mounted) timeoutId= setTimeout(run, 1000);
        },
      });
    };

    const start = () => {if (mounted) run()};
    (document?.fonts?.ready ?? Promise.resolve()).then(start);

   return ()=> {
    mounted = false;
    if (timeoutId) clearTimeout(timeoutId);
    gsap.killTweensOf(el);
   }

  }, []);

  return (
    <div className="hero-text-overlay">
      <div className="hero-text-wrapper">
        <h1>Rafaela Baquero</h1>
        <h2 ref={scrambleRef}>Designer</h2>
        <p>
          I’m a product designer who works across <span style={{ fontWeight: "bold", fontStyle: "italic" }}>UX, business & code</span>. I move between defining solutions and building them, working with AI and new tech to explore what’s possible and make it real. Outside of work, I enjoy cycling, Korean cinema, and existential philosophy.
        </p>
      </div>
    </div>
  );
}
