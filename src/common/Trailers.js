import { useEffect } from "react";
import { useState } from "react";
import { fetchMovie } from "../api/api";

export const Trailers = ({ moveId }) => {
  const [trailer, setTrailer] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchMovie(moveId)
      .then((res) => setTrailer(res))
      .catch((err) => setError(err));
  }, [moveId]);
  const src =
    trailer?.results?.length > 0 &&
    trailer.results.find((item) => item.name === "Official Trailer");
  const titleVideo = trailer && trailer.original_title;
  return (
    <>
      {" "}
      {src ? (
        <div>
          <iframe
            width="420"
            height="345"
            src={`https://www.youtube.com/embed/${src.key}`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
            title={titleVideo}
          />
        </div>
      ) : (
        <h1>Requested resource not found</h1>
      )}
    </>
  );
};
