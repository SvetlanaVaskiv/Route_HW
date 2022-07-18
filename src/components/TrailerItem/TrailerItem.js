import { useHistory } from "react-router-dom";
import { Progressive } from "../../common/Progressive";
import { Names, SecondStyleList, TrailersPost } from "./styles";

export const TrailerItem = ({
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
const fontsizes={
    mobile: '8px',
    laptop: '12px',
}
  return (
	
    <SecondStyleList onClick={onPushPass}>
		<TrailersPost 
		src={`https://image.tmdb.org/t/p/w300${poster_path}`}
		/>		
		<Names fonts={fontsizes}>{title}</Names>
		
    </SecondStyleList>
  );
};
