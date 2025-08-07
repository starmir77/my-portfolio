import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function CanvasHero({ variant = "global" }) {
    const isGlobal = variant === "global";
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth * 0.75;
        let height = canvas.height = window.innerHeight * 0.75;

        const dots = Array.from({ length: 60 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * 2 + 1,
            speed: 0.3 + Math.random() * 0.1,
        }));

        // Gradient color stops (interpolated)
        let colors = [
            { r: 247, g: 192, b: 199 }, // pink
            /*{ r: 255, g: 108, b: 167 }, // fucsia */
            { r: 221, g: 166, b: 232 }, // lavender
            { r: 253, g: 198, b: 137 }, // orange
            { r: 234, g: 193, b: 255 }, // mauve
        ];

        let currentStops = [0, 1, 2];
        let nextIndex = 3;

        const lerp = (a, b, t) => a + (b - a) * t;

        let t = 0;
        let transitionSpeed = 0.005; // slower = smoother

        const drawGradientBackground = () => {
            const gradient = ctx.createLinearGradient(0, 0, width, height);

            for (let i = 0; i < 3; i++) {
                const c1 = colors[currentStops[i]];
                const c2 = colors[(currentStops[i] + 1) % colors.length];

                const r = Math.floor(lerp(c1.r, c2.r, t));
                const g = Math.floor(lerp(c1.g, c2.g, t));
                const b = Math.floor(lerp(c1.b, c2.b, t));

                gradient.addColorStop(i / 2, `rgb(${r},${g},${b})`);
            }

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        };
        const animate = () => {
            drawGradientBackground();


            t += transitionSpeed;
            if (t >= 1) {
                t = 0;
                currentStops = [
                    currentStops[1],
                    currentStops[2],
                    nextIndex,
                ];
                nextIndex = (nextIndex + 1) % colors.length;
            }

            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: isGlobal ? "fixed" : "absolute",
                top: '0px',
                left: '0vw',
                width: '100%',
                height: isGlobal ? "100vh" : "100%",
                zIndex: 0,
                display: 'block',
                pointerEvents: 'none',
            }}
        />
    );
}

