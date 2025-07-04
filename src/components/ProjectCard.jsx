export default function ProjectCard({ title, subtitle, description, imageSrc, caseStudyLink }) {
  return (
    <div className="project-card">
      
      {/* Text first */}
      {subtitle && <p className="card-subtitle">{subtitle}</p>}
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>

      {/* Then image (if provided) */}
      {imageSrc && (
        <div className="card-image-wrapper">
          <img src={imageSrc} alt={`${title} preview`} className="card-image" />
        </div>
      )}

      {caseStudyLink}
    </div>
  );
}
