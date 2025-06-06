function TextList({ text, items }) {
  return (
    <section className="text-list">
      {text && <p className="text-list-text">{text}</p>}
      <ul className="text-list-items">
        {items.map((item, index) => (
          <li key={index} className="text-list-item">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TextList;
