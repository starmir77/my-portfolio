import { button } from "motion/react-client";

function TextList({ text, items, buttonUrl, buttonLabel }) {
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
      {buttonUrl && buttonLabel && (
        <a
          href={buttonUrl}
          className="glow-button"
          target="_blank"
          rel="noopener noreferrer"
        >
        {buttonLabel}
        </a>
      )}
    </section>
  );
}

export default TextList;
