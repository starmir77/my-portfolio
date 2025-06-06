function HeroCS({ title, subtitle, role, date, image }) {
  return (
    <section className="hero-cs">
      {/* IMAGE FIRST — left side */}
      <div className="hero-cs-image-container">
        <img src={image} alt={title} className="hero-cs-image" />
      </div>

      {/* TEXT SECOND — right side */}
      <div className="hero-cs-text">
        <h1 className="hero-cs-title">{title}</h1>
        <p className="hero-cs-subtitle">{subtitle}</p>
        <p className="hero-cs-meta">
          <span>{role}</span> · <span>{date}</span>
        </p>
      </div>
    </section>
  );
}

export default HeroCS;

