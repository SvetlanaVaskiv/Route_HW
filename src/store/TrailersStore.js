export class TrailersStore {
  constructor() {
    this._trailersList = [];
  }
  setTrailersList(trailersList) {
    this._trailersList = trailersList;
  }

  getTrailersList() {
    return this._trailersList;
  }
}
