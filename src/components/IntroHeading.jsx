function IntroHeading({ headline, problem, solution, impact }) {
  return (
    <section className="intro-heading">
      <div className="intro-heading-inner">
        {headline && <p className="intro-heading-eyebrow">{headline}</p>}
        <div className="intro-heading-body">
          {problem && <p><strong>Problem:</strong> {problem}</p>}
          {solution && <p><strong>Solution:</strong> {solution}</p>}
          {impact && <p><strong>Impact:</strong> {impact}</p>}
        </div>
      </div>
    </section>
  );
}

export default IntroHeading;
