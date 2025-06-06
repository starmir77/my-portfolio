import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';

export default function Work() {
  return (
    <section id="work" className="work-section">
      <div className="section-container">
        <h2 className="work-title">Selected Work</h2>
        <div className="card-wrapper">
          <ProjectCard
            title="Candyverse"
            description="A playful 3D game using Three.js, WebGL, and sound interaction. Deployed on Vercel."
            caseStudyLink={
              <Link to="/candyverse" className="case-study-button">
                View Case Study
              </Link>
            }
            subtitle="Design, Javascript, Three.JS"
          />
          <ProjectCard
            title="Adding Humor in Assistive Devices"
            description="A portfolio prototype combining voice UI and AI-driven humor delivery (Alexa-style)."
            caseStudyLink={
              <Link to="/aac" className="case-study-button">
                View Case Study
              </Link>

            }
            subtitle="Design, Javascript, Voice API"
          />

          <ProjectCard
            title="Movement as Art with Gesture Recognition"
            description="A gesture-driven art experience for Meta Quest — exploring movement as expression."
            caseStudyLink={
              <Link to="/aac" className="case-study-button">
                View Case Study
              </Link>
            }
            subtitle="Design, Meta's Presence SDK"
          />
        </div>
      </div>
    </section>
  );
}
