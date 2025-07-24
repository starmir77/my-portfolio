function HeroCS({ title, subtitle, role, date, image, githubUrl, prototypeUrl }) {
  return (
    <section className="hero-cs">
      <div className="hero-cs-wrapper">
        <div className="hero-cs-text">
          <h1 className="hero-cs-title">{title}</h1>
          <div className="hero-cs-meta">
            <span>{role}</span> · <span>{date}</span>
          </div>
          <p className="hero-cs-subtitle">{subtitle}</p>

          {(githubUrl || prototypeUrl) && (
            <div className="hero-cs-links">
              {prototypeUrl && (
                <a
                  href={prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-cs-link"
                >
                  Try the Prototype
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-cs-link"
                >
                  View Code
                </a>
              )}
            </div>
          )}
        </div>

        <div className="hero-cs-image-container">
          <img src={image} alt={title} className="hero-cs-image" />
        </div>
      </div>
    </section>
  );
}

export default HeroCS;

