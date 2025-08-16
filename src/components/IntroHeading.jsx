function IntroHeading({ problem, solution, impact }) {
  return (
    <section className="intro-heading">
      <div className="intro-heading-inner">
        <div className="intro-heading-body">
          <div className="intro-col">
            <p className="intro-heading-eyebrow">Problem</p>
            <p>{problem}</p>
          </div>
          <div className="intro-col">
            <p className="intro-heading-eyebrow">Solution</p>
            <p>{solution}</p>
          </div>
          <div className="intro-col">
            <p className="intro-heading-eyebrow">Impact</p>
            <ul>
              {impact.map((point, i) => (<li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroHeading;

