import { useEffect, useRef } from 'react';
import gsap from 'gsap';


export default function HeroTextOverlay() {
  const textRef = useRef(null);
  const name = "Rafa Baquero";

  useEffect(() => {
    if (!textRef.current) {
      console.log("❌ textRef is null");
      return;
    }

    const letters = textRef.current.querySelectorAll('.letter');
    console.log("✅ Letters found:", letters.length);

    gsap.fromTo(
      letters,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.05,
      }
    );
  }, []);

  return (
    <div className="hero-text-overlay">
      <h1 ref={textRef} className="hero-name">
        {name.split("").map((char, index) => (
          <span
            key={index}
            className={`letter ${char === " " ? "space" : ""}`}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
}
