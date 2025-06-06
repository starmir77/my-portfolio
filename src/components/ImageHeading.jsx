function ImageHeading({ headline, title, image, alt }) {
  return (
    <section className="image-heading">
      {headline && <p className="image-heading-eyebrow">{headline}</p>}
      {title && <h2 className="image-heading-title">{title}</h2>}
      {image && (
        <div className="image-heading-img-wrapper">
          <img src={image} alt={alt || title} className="image-heading-img" />
        </div>
      )}
    </section>
  );
}

export default ImageHeading;
