function PageHeading({ title, body }) {
  return (
    <section className="page-heading">
      <h1 className="page-heading-title">{title}</h1>
      <p className="page-heading-body">{body}</p>
    </section>
  );
}

export default PageHeading;
