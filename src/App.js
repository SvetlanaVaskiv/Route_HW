import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { MovieDetails } from "./pages/MovieDetails";
import { Movies } from "./pages/MoviesPage";
import { RootPage } from "./pages/RootPage";
import { Context } from ".";
import { useContext, useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";
import { getTrending, getTrendingByDay } from "./api/api";

function App() {
  const [loadind, setLoading] = useState(true);
  const { movies } = useContext(Context);
  const { details } = useContext(Context);
  const { trailers } = useContext(Context);

  useEffect(() => {
    getTrending()
      .then((res) => {
        movies.setMovieList(res);
        const idList = [];
        const backdrop_path_list = [];
        for (let i = 0; i < res.length; i++) {
          idList.push(res[i].id);
          backdrop_path_list.push(res[i].backdrop_path);
        }
        details.setIdList(idList);
        details.setBackdrop_post_list(backdrop_path_list);

        const backdrop_post = details._backdrop_post_list.map((item) => item)[
          Math.floor(Math.random() * details._backdrop_post_list.length)
        ];
        details.setBackdrop_post(backdrop_post);
        const id = details._idList.map((item) => item)[
          Math.floor(Math.random() * details._idList.length)
        ];
        details.setIdForPost(id);
      })
      .catch((e) => {
        console.log("Error general message " + e.message);
      })
      .finally(() => setLoading(false));
    getTrendingByDay()
      .then((data) => trailers.setTrailersList(data))
      .catch((e) => {
        console.log("Error general trailers' message " + e.message);
      });
  }, [movies, details, trailers]);

  if (loadind) {
    return <LinearProgress color="success" />;
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={RootPage} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/movie/:id" component={MovieDetails} />

        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
