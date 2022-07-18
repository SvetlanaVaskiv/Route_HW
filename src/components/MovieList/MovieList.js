import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchPosters, getTrending, getTrendingByDay } from "../../api/api";
import { MovieItem } from "../MovieItem/MovieItem";
import * as React from "react";
import {
  LayoutTrilers,
  OverlayPosted,
  Post,
  ListTriller,
  SecondPost,
} from "./styles";
import { Header } from "../Header/Header";
import Slider from "react-slick";
import { settings } from "../../common/settings";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SCROLL, HIDDEN } from "../../common/consts";
import { TrailerItem } from "../TrailerItem/TrailerItem";

export const MovieList = () => {
  const [response, setResponse] = useState([]);
  const [resTrailer, setResTrailer] = useState([]);
  const [posters, setPosters] = useState([]);
  const [id, setId] = useState(null);
  const [path, setPath] = useState(null);
  useEffect(() => {
    getTrending()
      .then(function (data) {
        setResponse(data);
        return data;
      })
      .then((data) =>
        setId(
          data.map((item) => item.id)[Math.floor(Math.random() * data.length)]
        )
      );
    getTrendingByDay().then((data) => setResTrailer(data));
  }, []);
  useEffect(() => {
    if (id)
      fetchPosters(id)
        .then(function (data) {
          setPosters(data);
          return data;
        })
        .then((data) =>
          setPath(
            data.backdrops.map((file) => file.file_path)[
              Math.floor(Math.random() * data.backdrops.length)
            ]
          )
        );
  }, [id]);
  const secondPath = response.map((item) => item.backdrop_path)[
    Math.floor(Math.random() * response.length)
  ];
  const secondPost = `https://image.tmdb.org/t/p/w300${secondPath}`;
  const padding = {
    laptop:"3em",
    mobile:'0.5em'
  };
  const heights = {
    laptop: "500px",
  };
  console.log(heights.laptop);

  return (
    <>
      <Header />
      {id && path && (
        <Post path={path} height={heights}>
          <OverlayPosted />
        </Post>
      )}
      <h1>What's popular</h1>
      <Slider {...settings}>
        {response &&
          response.map(
            ({ title, id, vote_average, poster_path, release_date }) => (
              <MovieItem
                id={id}
                release_date={release_date}
                title={title}
                key={id}
                poster_path={poster_path}
                vote_average={vote_average}
              />
            )
          )}
      </Slider>
      {id && path && (
        <SecondPost secpath={secondPost} padding={padding} height={heights} overflow={SCROLL}>
          <Slider {...settings}>
            {resTrailer &&
              resTrailer.map(({ title, id, poster_path, release_date }) => (
                <TrailerItem
                  id={id}
                  release_date={release_date}
                  title={title}
                  key={id}
                  poster_path={poster_path}
                />
              ))}
          </Slider>
        </SecondPost>
      )}

      <h1>Hellllll</h1>
    </>
  );
};
MovieList.propTypes = {
  response: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.bool.isRequired,
      poster_path: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      vote_average: PropTypes.number.isRequired,
    })
  ),
};
