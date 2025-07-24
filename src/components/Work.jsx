import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Work({ title, description, work, variant = "default" }) {
  return (

    <section id="work" className="work-section">
      <div className={`section-container ${variant}`}>
        <div className={`work-text-container ${variant}`}>
          <h2 className="work-title">{title}</h2>
          <p>{description}</p>
        </div>
        <div className="card-wrapper2">
          {work.map((entry, index) => (
            <motion.div
              key={entry.id}
              className={`${entry.id} ${variant}`}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ProjectCard
                key={entry.id}
                title={entry.title}
                description={entry.description}
                caseStudyLink={

                  <Link to={entry.caseStudyPath} className="case-study-button">
                    View Case Study
                  </Link>

                }
                subtitle={entry.subtitle}
                imageSrc={entry.imagesrc}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
