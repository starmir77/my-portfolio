import { useEffect, useState } from "react";

const titles = ["Designer", "Coder", "Creative Technologist"];

export default function Hero() {
    const [currentTitle, setCurrentTitle] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitle((prev) => (prev + 1) % titles.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero-section"id="hero">
            <h1 className="hero-title">
                Rafaela Baquero
            </h1>
            <p className="hero-subtitle">
                {titles[currentTitle]}
            </p>
            <p className="hero-description">
                I started in product management, built and launched a startup in AR, and realized I was most fulfilled when designing and building hands-on. I’ve since shifted focus toward creative technology — blending design, code, and storytelling to craft expressive, interactive experiences.
            </p>
        </section>

    );
}