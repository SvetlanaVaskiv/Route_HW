import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchPosters, getTrending } from "../../api/api";
import { MovieItem } from "../MovieItem/MovieItem";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { OverlayPost, OverlayPosted, Post } from "./styles";
import { Header } from "../Header/Header";

export const MovieList = () => {
  const [response, setResponse] = useState([]);
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
            data.posters.map((file) => file.file_path)[
              Math.floor(Math.random() * data.posters.length)
            ]
          )
        );
  }, [id]);

  console.log(posters);
  return (
    <>
	<Header/>
	<Post path={path} >
	</Post>
    
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
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
      </ul>
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
