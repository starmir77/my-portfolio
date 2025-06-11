import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';

export default function Work() {
  return (
    <section id="work" className="work-section">
      <div className="section-container">
        <h2 className="work-title">Selected Work</h2>
        <div className="card-wrapper">
          <ProjectCard
            title="Candyverse, Designing Playful Worlds for Curious Minds"
            description="An exploration of playful 3D interaction using Three.js, WebGL, and generative AI — deployed on Vercel"
            caseStudyLink={
              <Link to="/candyverse" className="case-study-button">
                View Case Study
              </Link>
            }
            subtitle="Design, Javascript, Three.JS"
            imageSrc= "/assets/ProjectCard_Candyverse.png"
          />
          <ProjectCard
            title="Designing Sarcasm: Reclaiming Voice, Humour & Identity"
            description="Reimagining AAC voice design—shaped by user research and built with vanilla JavaScript and Amazon Polly"
            caseStudyLink={
              <Link to="/aac" className="case-study-button">
                View Case Study
              </Link>

            }
            subtitle="Design, Javascript, Voice API"
            imageSrc="/assets/ProjectCard_AAC.png"
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
