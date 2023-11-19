import React from "react";

const Youtube = ({ src, title = "", className = "" }) => {
  return (
    <div>
      <iframe
        title={`Embed video ${title}`}
        src={`https://www.youtube.com/embed/${src}`}
        gesture="media"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Youtube;
