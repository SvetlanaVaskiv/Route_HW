export class MovieStore {
  constructor() {
    this._movieList = [];
  }
  setMovieList(movieList) {
    this._movieList = movieList;
  }

  getMovieList() {
    return this._movieList;
  }
}
