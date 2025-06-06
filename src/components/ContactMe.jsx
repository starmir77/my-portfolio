export default function ContactMe() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-heading">Let's Connect</h2>
      <p className="contact-text">
        Whether you have an idea, a question, or just want to say hi — feel free to{" "}
        <a href="mailto:your.email@example.com" className="contact-link">email me</a>.
      </p>
      <div className="contact-icons">
        <a
          href="https://www.linkedin.com/in/rafaelabaquero/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/starmir77"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
