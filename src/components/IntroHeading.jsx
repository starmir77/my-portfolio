function IntroHeading({ headline, title, body }) {
  return (
    <section className="intro-heading">
      <div className="intro-heading-inner">
        {headline && <p className="intro-heading-eyebrow">{headline}</p>}
        {title && <h2 className="intro-heading-title">{title}</h2>}
        {body && <p className="intro-heading-body">{body}</p>}
      </div>
    </section>
  );
}

export default IntroHeading;
