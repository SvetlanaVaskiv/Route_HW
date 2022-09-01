const apiKey = "1793f1d1bd070eb7923f4cdaee264029";

export const getTrending = async () => {
  return await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("not found");
    })
    .then((data) => data.results)
    .catch((err) => {
      throw err;
    });
};
export const getTrendingByDay = async () => {
  return await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("not found");
    })
    .then((data) => data.results)
    .catch((err) => {
      throw err;
    });
};
export const getNowPlayingMovies = async (search) => {
  if (search === "streaming") {
    return await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => data)
      .catch((err) => {
        throw err;
      });
  } else if (search === "in theatres") {
    return await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => data)
      .catch((err) => {
        throw err;
      });
  } else if (search === "on TV") {
    return await fetch(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}`
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => data)
      .catch((err) => {
        throw err;
      });
  } else if (search === "for rent") {
    return await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&watch_region=US&with_watch_monetization_types=rent`
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => data)
      .catch((err) => {
        throw err;
      });
  }
};

export const fetchMovieDetails = async (movieId) => {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("not found");
    })
    .then((data) => data)
    .catch((err) => {
      throw err;
    });
};
export const fetchMovie = async (movieId) => {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Requested resource not found");
    })
    .then((data) => data)
    .catch((err) => {
      throw err;
    });
};

export const fetchPosters = async (id) => {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${apiKey}`
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("not found");
    })
    .then((data) => data)
    .catch((err) => {
      throw new Error("I can't download a picture: " + err.message);
    });
};
