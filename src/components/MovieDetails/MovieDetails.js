import { useEffect, useState } from "react";
import { fetchMovie, fetchMovieDetails } from "../../api/api";
import { ButtonStyle } from "../../common/StyleBtn";
import { StyleCard } from "../Root/StyleRootPage";
import { CommentsList } from "../CommentsList/CommentsList";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Poster, StyledDescribe } from "./StyledDescribe";
import { StyleList } from "../MovieItem/StyleList";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LinearProgress } from "@mui/material";
import Canvas from "../Preload/Canvas";
import Preload from "../Preload/Preload";

export const MovieDetailsContainer = () => {
  const [move, setMove] = useState(null);
  const history = useHistory();
  const { params } = useRouteMatch();
  const movieId = params.id;
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (movieId) {
      fetchMovieDetails(movieId).then((res) => setMove(res));
      fetchMovie(movieId).then((res) => setVideo(res));
      setLoading(false);
    }
  }, [movieId]);
  const path = move && (move.backdrop_path || move.poster_path || "");
  const onGoBack = () =>
    history.push({
      pathname: `/movies`,
    });
  const genresJsx =
    move &&
    move.genres &&
    move.genres.map(({ name, id }) => <StyleList key={id}> {name}</StyleList>);
  const titleVideo = video && video.original_title;
  const titleJsx = move && move.title && <h1>{move.title}</h1>;
  const describe = move && (
    <StyledDescribe>
      {move.overview}
      <h5>Release's date: {move.release_date}</h5>
    </StyledDescribe>
  );

  let ancor =
    video && video.results.find((item) => item.name === "Official Trailer");
  if (move) {
    console.log(move);
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {loading ? (
        <LinearProgress />
      ) : (
        <>
          <div style={{ width: "200px" }}>
            <h2> Single Item</h2>
            <Slider {...settings}>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${path}`}
                  width="200"
                  alt="Here should be the poster"
                />
              </div>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${path}`}
                  width="200"
                  alt="Here should be the poster"
                />
              </div>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${path}`}
                  width="200"
                  alt="Here should be the poster"
                />
              </div>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${path}`}
                  width="200"
                  alt="Here should be the poster"
                />
              </div>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${path}`}
                  width="200"
                  alt="Here should be the poster"
                />
              </div>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${path}`}
                  width="200"
                  alt="Here should be the poster"
                />
              </div>
            </Slider>
          </div>
          {titleJsx}

          <Poster>
            <img
              src={`https://image.tmdb.org/t/p/w300/${path}`}
              width="700"
              alt="Here should be the poster"
            />
            <div>{genresJsx}</div>
          </Poster>
          {describe}
          <iframe
            width="420"
            height="345"
            allow="fullscreen"
            src={ancor && `https://www.youtube.com/embed/${ancor.key}`}
            title={titleVideo}
          ></iframe>
          <ButtonStyle variant="contained" onClick={onGoBack}>
            {" "}
            Go Back
          </ButtonStyle>
        </>
      )}

      <CommentsList />
      <ButtonStyle variant="contained" onClick={onGoBack}>
        {" "}
        Go Back
      </ButtonStyle>
    </>
  );
};
