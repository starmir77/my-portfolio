function TextCTA({ title, text, listItems, buttonLabel, buttonUrl }) {
  return (
    <section className="text-cta">
      <div className="text-cta-wrapper">
        {title && <h2 className="text-cta-title">{title}</h2>}

        {text && <p className="text-cta-intro">{text}</p>}

        {listItems && listItems.length > 0 && (
          <ul className="text-cta-list">
            {listItems.map((item, index) => (
              <li key={index} className="text-cta-list-item">
                {item}
              </li>
            ))}
          </ul>
        )}

        {buttonLabel && buttonUrl && (
          <a href={buttonUrl} className="text-cta-button" target="_blank" rel="noopener noreferrer">
            {buttonLabel}
          </a>
        )}
      </div>
    </section>
  );
}

export default TextCTA;
