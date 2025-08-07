import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroTextOverlay from './HeroTextOverlay';

export default function Work({ id, work, variant = "default" }) {
  return (
    <section id={id} className="work-section">
      <div className={`section-container ${variant}`}>
        <div className="card-wrapper2">
          {/* Hero text inside grid, spans full width */}
          <div className={`grid-hero ${variant}`}>
            <HeroTextOverlay />
          </div>
          {/* Project cards */}
          {work.map((entry, index) => (
            <motion.div
              key={entry.id}
              className={`project-card-wrapper ${entry.id} ${variant}`}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Link to={entry.caseStudyPath} className="project-card-link">
                <ProjectCard
                  key={entry.id}
                  title={entry.title}
                  description={entry.description}

                  subtitle={entry.subtitle}
                  imageSrc={entry.imagesrc}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
