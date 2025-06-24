export default function ContactMe({ contact }) {
  const { title, body, email, links } = contact;

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-heading">{title}</h2>
      <p className="contact-text">
        {body}{" "}
        <a href={`mailto:${email.address}?subject=${encodeURIComponent(email.subject)}`}
          className="contact-link">{email.label}</a>.
      </p>
      <div className="contact-icons">
        {links.map((link) =>
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        )}
      </div>
    </section>
  );
}
