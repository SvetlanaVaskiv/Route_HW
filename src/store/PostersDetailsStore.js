export default class PostersDetailsStore {
  constructor() {
    this._idList = [];
    this._idForPost = null;
    this._backdrop_post = "";
    this._backdrop_post_list = [];
  }

  setIdList(idList) {
    this._idList = idList;
  }

  getIdList() {
    return this._idList;
  }
  setIdForPost(idForPost) {
    this._idForPost = idForPost;
  }

  getIdForPost() {
    return this._idForPost;
  }
  setBackdrop_post(backdrop_post) {
    this._backdrop_post = backdrop_post;
  }

  getBackdrop_post() {
    return this._backdrop_post;
  }
  setBackdrop_post_list(backdrop_post_list) {
    this._backdrop_post_list = backdrop_post_list;
  }

  getBackdrop_post_list() {
    return this._backdrop_post_list;
  }
}
