function EmbedFrame({ url, title }) {
  return (
    <div className="embed-frame-container">
      <iframe
        src={url}
        title={title}
        allowFullScreen
        className="embed-frame"
      ></iframe>
    </div>
  );
}

export default EmbedFrame;
