import { useState, useEffect } from 'react';

export default function ProjectCard({ title, subtitle, description, imageSrc, caseStudyLink, className }) {

  {
    const [hovered, setHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const handleMouseMove = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
      };

      if (hovered) {
        window.addEventListener('mousemove', handleMouseMove);
      } else {
        window.removeEventListener('mousemove', handleMouseMove)
      }
      return () => window.removeEventListener('mousemove', handleMouseMove);

    }, [hovered]);

    return (

      <>
        <div className={className}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Then image (if provided) */}
          {imageSrc && (
            <div className="card-image-wrapper">
              <img src={imageSrc} alt={`${title} preview`} className="card-image" />
            </div>
          )}

          <div className="card-text">
            {/* Text first */}
            {subtitle && <p className="card-subtitle">{subtitle}</p>}
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
          </div>
          {caseStudyLink}
        </div>
        {hovered && (
          <div
            className="hover-cursor-label"
            style={{ top: mousePos.y + 20, left: mousePos.x + 20 }}
          >
            View Case Study
          </div>
        )}
      </>
    );
  }
}
