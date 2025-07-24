export default function ProjectCard({ title, subtitle, description, imageSrc, caseStudyLink, className }) {
  return (
    <div className={className}>

      <div className="card-text">
        {/* Text first */}
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>

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
