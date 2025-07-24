import { button } from "motion/react-client";

function TextList({ text, items, buttonUrl, buttonLabel }) {
  return (
    <section className="text-list">
      <div className="text-list-wrapper">
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
            className="hero-cs-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {buttonLabel}
          </a>
        )}
      </div>
    </section>
  );
}

export default TextList;
