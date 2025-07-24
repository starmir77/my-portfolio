function QuoteGroup({ quotes }) {
  return (
    <section className="quote-group">
      <div className="quote-group-wrapper">
        {quotes.map((quote, index) => (
          <div key={index} className="quote-block">
            <blockquote className="quote-text">“{quote.text}”</blockquote>
            {quote.author && (
              <footer className="quote-footer">— {quote.author}</footer>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default QuoteGroup;
