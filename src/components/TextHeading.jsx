function TextHeading({ headline, title, body }) {
  return (
    <section className="text-heading">
      <div className="text-heading-wrapper">
      {headline && <p className="text-heading-eyebrow">{headline}</p>}
      {title && <h2 className="text-heading-title">{title}</h2>}
      {body && <p className="text-heading-body">{body}</p>}
      </div>
    </section>
  );
}

export default TextHeading;
