import styled from "styled-components";

export const OverlayPosted = styled.div`
  background-color: rgba(26, 131, 120, 0.53);
  height: 100%;
  border-radius: 10px;
`;

export const Post = styled("div", {
  name: "Post",
})((props) => ({
  backgroundImage: ` 
   url(https://image.tmdb.org/t/p/w300${props.path || props.secpath})`,
  minHeight: "180px",
  height: "calc(100vh / 5)",
  maxHeight: "500px",
  backgroundPosition: "top center",
  backgroundSize: "cover",
  width: "90%",
  marginLeft: "5vw",
  marginTop: "4vh",
  "@media(min-width:532px)": { minHeight: "250px" },
  "@media(min-width:768px)": { minHeight: "300px" },
  "@media(min-width:1200px)": { minHeight: "350px" },
  "@media(min-width:1800px)": { minHeight: "500px" },
}));
export const SecondPost = styled(Post, {
  name: "SecondPost",
})((props) => ({
  backgroundImage: ` 
   url(https://image.tmdb.org/t/p/w300${props.secpath})`,
  /* overflow: `${props.overflow}`,*/
  minHeight: "230px",
  borderRadius: "10px",
  width: "96%",
  marginLeft: "2vw",
  margin: "2em 0.5em",
  "@media(min-width:438px)": { minHeight: "250px", margin: "2em 0.8em" },
  "@media(min-width:767px)": { minHeight: "450px", margin: "2em 1.2em" },
  "@media(min-width:1000px)": { minHeight: "400px", margin: "2em 1.2em" },
  "@media(min-width:1200px)": {
    minHeight: props.height.laptop,
    margin: "2em 1.5em",
  },
  "@media(min-width:1800px)": { minHeight: "500px" },
}));

export const LayoutTrilers = styled.div``;
export const ListTriller = styled.ul`
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  margin: 0 1em;
`;

export const SearchLayout = styled("div", {
  name: "SearchLayout",
})((props) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  color: props.color || "white",
  alignItems: "center",
  padding: "1em 0",
}));

export const Search = styled.div`
  display: flex;
  flex-direction: raw;
  justify-content: space-around;
  border: black 2px solid;
  border-radius: 35px;
`;

export const TextsSearchLayout = styled("div", {
  name: "TextsSearchLayout",
})((props) => ({
  borderRadius: "28px",
  backgroundColor: props.active ? "rgb(3,37,65)" : null,
}));
export const Tab = styled("h1", {
  name: "Tab",
})((props) => ({
  background:
    props.active && "-webkit-linear-gradient(349deg, #53d9b3 60.92%, #07209a)",
  "-webkit-text-fill-color": props.active && "transparent",
  "-webkit-background-clip": props.active && "text",
  padding: "0 2vw",
}));
