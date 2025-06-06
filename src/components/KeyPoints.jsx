function KeyPoints({ text, items }) {
  return (
    <section className="key-points">
      {text && <p className="key-points-text">{text}</p>}
      <ul className="key-points-list">
        {items.map((item, index) => (
          <li key={index} className="key-points-item">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default KeyPoints;
