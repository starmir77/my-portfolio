function HeroCS({ title, subtitle, role, date, image, githubUrl, prototypeUrl }) {
  return (
    <section className="hero-cs">
      {/* IMAGE FIRST — left side */}
      <div className="hero-cs-image-container">
        <img src={image} alt={title} className="hero-cs-image" />
      </div>

      {/* TEXT SECOND — right side */}
      <div className="hero-cs-text">
        <h1 className="hero-cs-title">{title}</h1>
        <p className="hero-cs-meta">
          <span>{role}</span> · <span>{date}</span>
          <span><p className="hero-cs-subtitle">{subtitle}</p></span>
        </p>

        {/* Optional GitHub and Prototype links */}
        {(githubUrl || prototypeUrl) && (
          <div className="hero-cs-links">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hero-cs-link">
                GitHub
              </a>
            )}
            {prototypeUrl && (
              <a href={prototypeUrl} target="_blank" rel="noopener noreferrer" className="hero-cs-link">
                Prototype
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default HeroCS;

