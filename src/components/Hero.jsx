import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function Hero({ heroInfo }) {
    const { title, subtitle, body, links } = heroInfo;

    const [currentTitle, setCurrentTitle] = useState(0);

    useEffect(() => {

        if (!subtitle || !subtitle.length) return;

        const interval = setInterval(() => {
            setCurrentTitle((prev) => (prev + 1) % subtitle.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero-section" id="hero">
            <h1 className="hero-title">
                {title}
            </h1>
            <p className="hero-subtitle">
                {subtitle[currentTitle]}
            </p>
            <p className="hero-description">
                {body}
            </p>
            <div className="hero-button-container">
                {links.map((entry) => (
                    <a href={entry.url} className="hero-button" key={entry.id}>
                        {entry.label}
                    </a>
                ))}
            </div>
        </section>

    );
}