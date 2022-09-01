import {  LayoutProgressive, PostLi, StyleList } from "./styles";
import { useHistory } from "react-router-dom";
import { Progressive } from "../../common/Progressive";

export const MovieItem = ({
  title,
  id,
  vote_average,
  poster_path,
  release_date,
}) => {
	const release= new Date(release_date)
	function toMonthName(monthNumber) {
		release.setMonth(monthNumber - 1);
		return release.toLocaleString('en-US', {
		  month: 'long',
		});
	  }
	  const month=   toMonthName(release.getMonth())
  const date = release.getDate()+" "+month+' '+release.getFullYear()
  const history = useHistory();
  const onPushPass = () => {
    history.push({
      pathname: `/movie/${id}`,
    });
  };

  return (
	
    <StyleList onClick={onPushPass}>
		<PostLi 
		src={`https://image.tmdb.org/t/p/w300${poster_path}`}
		/>
		<div>


		</div>
	  <LayoutProgressive>
        <Progressive vote_average={vote_average}  />
      </LayoutProgressive>
		
		<h1>{title}</h1>
		<p>{date}</p>
		
    </StyleList>
  );
};
