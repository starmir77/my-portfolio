import Navbar from '../components/Navbar';
import HeroCS from '../components/HeroCS';
import IntroHeading from '../components/IntroHeading';
import TextHeading from '../components/TextHeading';
import PageHeading from '../components/PageHeading';
import TextList from '../components/TextList';
import ImageHeading from '../components/ImageHeading';
import NextCaseStudyFooter from '../components/NextCaseStudyFooter';
import LoopingVideo from '../components/LoopingVideo';
import { useEffect } from 'react';


function CandyverseCaseStudy() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <main>
            <Navbar></Navbar>
            <HeroCS
                title="Candyverse: Designing Playful Worlds for Curious Minds"
                subtitle="An exploration of interactive 3D environments built with Three.js and JavaScript"
                role="Design, Programming"
                date="2025"
                image="src/assets/ProjectCard_Candyverse.png"
            />

            <IntroHeading
                headline="Overview"
                title="It's Raining Candy"
                body="Candyverse started as a fun side project to explore 3D development using JavaScript and Three.js — and as a small gift for my 6-year-old nephew, who loves anything candy-related. I wanted to build something playful yet purposeful: a game that let me experiment with 3D assets, object spawning, and interaction design in the browser, while also learning how to structure code for real-time performance. What began as a learning exercise quickly turned into a sweet little game with falling candy, clickable animations, and a vibrant, whimsical world."
            />

            <PageHeading
                title="Creating a Magic-Filled Candy Universe"
            />
            <TextHeading
                headline=""
                title=""
                body="This was the heart of the fun. I wanted the visuals to feel magical — not just “candy-themed” but like a whole world made of sugar and imagination. To do that, I combined hand-picked 3D models with generative tools to create something playful, immersive, and surprisingly rich for such a simple concept."
            />
            <TextHeading
                headline=""
                title="Tools & Assets:"
                body=""
            />
            <TextList
                text=""
                items={[
                    "3D Candy Models: I used a set of .glb models for candies — gumdrops, swirls, gummies, lollipops. These were lightweight and stylized to stay performant.",
                    "Skybox AI: I generated spherical backgrounds using prompts like “fantastical candy planet, pastel color palette, dreamlike lighting” — producing equirectangular 360° environments that wrapped around the scene and gave each world its own identity.",
                    "Three.js: Each model was rendered and animated using Three.js, giving me full control over lighting, movement, and layering."
                ]}
            />

            <TextHeading
                headline=""
                title="Design Approach:"
                body=""
            />
            <TextList
                text=""
                items={[
                    "All visuals were modular. I could easily swap out skyboxes or sets of candy to create entirely new worlds.",
                    "The color palette was intentionally soft and warm — think pinks, purples, and minty greens — to feel safe and kid-friendly."
                ]}
            />

            <ImageHeading
                headline="The Candyverse by Skybox AI"
                title=""
                image="src/assets/2025Portfolio_Candyverse_Universe.webp"
                alt="Screenshot of AAC interface with popup voice styling menu"
            />

            <PageHeading
                title="Making it Fun to Play"
            />
            <TextHeading
                headline=""
                title=""
                body="Designing a game for a 6-year-old meant keeping it simple, delightful, and rewarding. I focused on creating intuitive interactions and a natural sense of progression, using Three.js and JavaScript to make everything run smoothly on the web."
            />
            <TextHeading
                headline=""
                title="Game Mechanics:"
                body=""
            />
            <TextList
                text=""
                items={[
                    "Click-to-Collect: Candies fall from the sky, and players click them to earn points. No complicated rules — just immediate feedback and gratification.",
                    "Increasing Challenge: As players collect more points, the candies fall faster — creating a soft difficulty curve to keep engagement high.",
                    "Score Milestone Transitions: Once a player reaches a specific score threshold, they fly to a new world — introducing new visuals, sounds, and candy."
                ]}
            />

            <TextHeading
                headline=""
                title="World Transitions:"
                body=""
            />
            <TextList
                text=""
                items={[
                    "At key point thresholds (e.g., 10, 20, 30), players are transported to a new candy-themed world via a flying animation. This moment of travel is a reward in itself — visually rich, immersive, and brief enough to maintain flow.",
                    "The transition animation was custom-scripted to feel like a joyful lift-off, using camera movement and easing curves in Three.js for smooth motion."
                ]}
            />

            <LoopingVideo
                src="src/assets/Candyverse_Transitions.mp4"
                poster=""
                className="case-study-hero-video"
            />

            <TextHeading
                headline=""
                title="Technical Structure:"
                body=""
            />
            <TextList
                text=""
                items={[
                    "World-Based Modularity: Each world has one specific candy asset, background texture (created via Skybox AI), and its own soundscape.",
                    "Spawner Logic: The spawner drops a single type of candy at randomized X positions and adjusts drop rate based on score.",
                    "Raycasting for Click Detection: I used Three.js raycasting to detect and register candy clicks reliably."
                ]}
            />

            <TextHeading
                headline=""
                title="Gen-AI Integration:"
                body=""
            />
            <TextList
                text=""
                items={[
                    "Skybox AI: Each world’s 3D environment was generated using Skybox AI, which allowed me to create rich, fantastical backgrounds without modeling them manually.",
                    "ElevenLabs Audio: Each world features a unique sound effect for clicking candies, generated via ElevenLabs. Transition sounds for world travel were also created using this tool, adding variety and delight."
                ]}
            />
            <PageHeading
                title="Built To Scale"
            />
            <TextHeading
                headline=""
                title=""
                body="From the beginning, I wanted to build Candyverse in a way that would make it easy to add new worlds, effects, or even new game modes — without rewriting core systems. That meant being thoughtful about abstraction, file organization, and making each part of the game respond to data rather than hardcoded behavior."
            />
            <TextHeading
                headline=""
                title="Plug & Play Worlds:"
                body=""
            />
            <TextList
                text=""
                items={[
                    "Each world is defined in an array of objects, listing the candy model, background texture (via Skybox AI), sound effects (via ElevenLabs), and score needed to unlock it.",
                    "Adding a new world only requires updating this array — no changes needed elsewhere in the code."
                ]}
            />

            <TextHeading
                headline=""
                title="Centralized Game Tuning:"
                body=""
            />
            <TextList
                text=""
                items={[
                    "Key gameplay settings — like candy fall speed, transition points, and scoring — are stored in one easy-to-access file.",
                    "I can adjust difficulty or pacing without touching multiple parts of the code.",
                    "This setup allows for quick iteration and easier testing."
                ]}
            />

            <ImageHeading
                headline="Architecture Diagram"
                title=""
                image="src/assets/Candyverse_ArchitectureDiagram.png"
            />

            <PageHeading
                title="Make it Fast, Keep it Magical"
            />
            <TextHeading
                headline=""
                title=""
                body="To ensure smooth performance across mobile and desktop, I had to make key trade-offs between visual quality and speed."
            />
            <TextHeading
                headline=""
                title="Balanced Background Quality:"
                body=""
            />
            <TextList
                text=""
                items={[
                    "Skybox AI generated high-quality EXR files, but they were too large for mobile — causing crashes and long load times.",
                    "I switched to HDR versions instead, reducing file size while preserving enough visual fidelity."
                ]}
            />
            <TextHeading
                headline=""
                title="Lightweight Asset Strategy:"
                body=""
            />
            <TextList
                text=""
                items={[
                    "Only one candy model per world is loaded at a time, minimizing memory usage.",
                    "All 3D models are managed via GLTFLoader, with proper disposal of old geometry and materials between worlds.",
                    "I converted all large textures from JPEG to WebP, cutting file sizes significantly without sacrificing quality."
                ]}
            />

            <TextHeading
                headline=""
                title="Optimizing for Mobile:"
                body=""
            />
            <TextList
                text=""
                items={[
                    "UI elements scale responsively, with large click targets optimized for touchscreens.",
                    "Animations and effects are intentionally lightweight to prevent frame drops and battery drain."
                ]}
            />

            <ImageHeading
                headline="From 128MB to 1.9 MB, can you tell the difference?"
                title=""
                image="src/assets/Candyverse_QualityDifference.png"
            />

            <PageHeading
                title="Reflections & Next Steps"
            />
            <TextHeading
                headline=""
                title=""
                body="Candyverse started as a playful side project — a gift for my 6-year-old nephew and a way to deepen my skills in Three.js, JavaScript, and interactive design. But it quickly became a technical playground for learning how to structure scalable systems, optimize for performance, and integrate generative tools in creative development."
            />

            <TextHeading
                headline=""
                title="What I Learned:"
                body=""
            />
            <TextList
                text=""
                items={[
                    "Simplicity is hard: Building a smooth, joyful experience with minimal interaction required constant iteration and restraint.",
                    "Architecture matters early: Planning for extensibility upfront (like modular world definitions) made it easy to grow the game.",
                    "Performance tuning is worth it: Small changes (like switching to .webp images or disposing of unused assets) made a big difference in mobile experience."
                ]}
            />
            <TextHeading
                headline=""
                title="What I'd Add Next:"
                body=""
            />
            <TextList
                text=""
                items={[
                    "Save Progress: Persist high scores or unlocked worlds across sessions.",
                    "Add More Worlds: With modular architecture in place, new worlds can be added with minimal effort.",
                    "Explore the Universe: Turn the linear world progression into an explorable map or galaxy — giving players more freedom and replayability."
                ]}
            />

            <ImageHeading
                headline="Gumdrop World"
                title=""
                image="src/assets/Candyverse_NextSteps.png"
            />
            <NextCaseStudyFooter
                nextTitle="Next Case Study >>"
                nextPath="/aac"
            />

        </main>

    )
}

export default CandyverseCaseStudy;