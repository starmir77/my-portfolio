function Quote({ text, author }) {
  return (
    <section className="quote-block">
      <blockquote className="quote-text">“{text}”</blockquote>
      {author && <footer className="quote-footer">— {author}</footer>}
    </section>
  );
}

export default Quote;
