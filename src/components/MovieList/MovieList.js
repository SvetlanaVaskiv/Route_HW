import { useEffect, useState } from "react";
import { fetchPosters, getNowPlayingMovies } from "../../api/api";
import { MovieItem } from "../MovieItem/MovieItem";
import * as React from "react";
import {
  OverlayPosted,
  Post,
  Search,
  SearchLayout,
  SecondPost,
} from "./styles";
import { Header } from "../Header/Header";
import Slider from "react-slick";
import { settings } from "../../common/settings";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { COLOR, HEIGHT, PADDING, SCROLL } from "../../common/consts";
import { TrailerItem } from "../TrailerItem/TrailerItem";
import { Tabs } from "../../common/Tabs";
import { useContext } from "react";
import { Context } from "../..";

export const MovieList = () => {
  const [path, setPath] = useState(null);
  const tabs = ["Streaming", "On TV", "For Rent", "In Theatres"];
  const [selectedTab, setSelectedTab] = useState("");
  const [selectedBlock, setSelectedBlock] = useState(null);
  const { movies } = useContext(Context);
  const { details } = useContext(Context);
  const { trailers } = useContext(Context);
  console.log(trailers);
  const secondPost = `https://image.tmdb.org/t/p/w300${details._backdrop_post}`;
  useEffect(() => {
    fetchPosters(details._idForPost)
      .then(function (data) {
        if (data)
          setPath(
            data.backdrops.map((file) => file.file_path)[
              Math.floor(Math.random() * data.backdrops.length)
            ]
          );
      })
      .catch((err) => {
        throw new Error("I can't download a picture: " + err.message);
      });
  }, [details._idForPost]);

  useEffect(() => {
    if (selectedTab === "Streaming" && selectedBlock === 1) {
      let search = "streaming";
      getNowPlayingMovies(search).then((data) =>
        movies.setMovieList(data.results)
      );
    } else if (selectedTab === "In Theatres" && selectedBlock === 1) {
      let search = "in theatres";
      getNowPlayingMovies(search).then((data) =>
        movies.setMovieList(data.results)
      );
    } else if (selectedTab === "On TV" && selectedBlock === 1) {
      let search = "on TV";
      getNowPlayingMovies(search).then((data) =>
        movies.setMovieList(data.results)
      );
    } else if (selectedTab === "For Rent" && selectedBlock === 1) {
      let search = "for rent";
      getNowPlayingMovies(search).then((data) =>
        movies.setMovieList(data.results)
      );
    } else if (selectedTab === "Streaming" && selectedBlock === 2) {
      let search = "streaming";
      getNowPlayingMovies(search).then((data) =>
        trailers.setTrailersList(data.results)
      );
    } else if (selectedTab === "In Theatres" && selectedBlock === 2) {
      let search = "in theatres";
      getNowPlayingMovies(search).then((data) => {
        console.log(data.results);
        trailers.setTrailersList(data.results);
      });
    } else if (selectedTab === "On TV" && selectedBlock === 2) {
      let search = "on TV";
      getNowPlayingMovies(search).then((data) =>
        trailers.setTrailersList(data.results)
      );
    } else if (selectedTab === "For Rent" && selectedBlock === 2) {
      let search = "for rent";
      getNowPlayingMovies(search).then((data) =>
        trailers.setTrailersList(data.results)
      );
    }
  }, [selectedTab, selectedBlock, movies, trailers]);

  return (
    <>
      <Header />
      {path && (
        <Post path={path} height={HEIGHT}>
          <OverlayPosted />
        </Post>
      )}
      <SearchLayout color={COLOR.black}>
        <h1>What's popular</h1>
        <Search>
          <Tabs
            selectedBlock={selectedBlock}
            tabs={tabs}
            onTabClick={(index) => {
              setSelectedTab(index);
              setSelectedBlock(1);
            }}
          />
        </Search>
      </SearchLayout>
      <Slider {...settings}>
        {movies &&
          movies._movieList.map(
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
      {path && (
        <SecondPost
          secpath={secondPost}
          padding={PADDING}
          height={HEIGHT}
          overflow={SCROLL}
        >
          <OverlayPosted>
            <SearchLayout color={COLOR.white}>
              <h1>Latest Trailers</h1>
              <Search>
                <Tabs
                  tabs={tabs}
                  onTabClick={(index) => {
                    setSelectedTab(index);
                    setSelectedBlock(2);
                  }}
                />
              </Search>
            </SearchLayout>

            <Slider {...settings}>
              {trailers._trailersList.map(
                ({ title, id, poster_path, release_date }) => (
                  <TrailerItem
                    id={id}
                    release_date={release_date}
                    title={title}
                    key={id}
                    poster_path={poster_path}
                  />
                )
              )}
            </Slider>
          </OverlayPosted>
        </SecondPost>
      )}

      <h1>Hellllll</h1>
    </>
  );
};
