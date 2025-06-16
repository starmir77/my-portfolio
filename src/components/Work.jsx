import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';

export default function Work() {
  return (
    <section id="work" className="work-section">
      <div className="section-container">
        <h2 className="work-title">Selected Work</h2>
        <div className="card-wrapper">
          <ProjectCard
            title="Candyverse, Designing Playful Worlds for Young Minds"
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
            description="Exploring embodied interaction on Meta Quest—built in Unity with hand tracking, XR Toolkit, Meta’s SDK, and AI-powered gesture recognition."
            caseStudyLink={
              <Link to="/aac" className="case-study-button">
                View Case Study
              </Link>
            }
            subtitle="Design, Meta's Presence SDK"
            imageSrc="/assets/ProjectCard_ComingSoon_bw.png"
          />
        </div>
      </div>
    </section>
  );
}
