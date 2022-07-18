
import { Box } from '@mui/system';
import { SHIFT, SIZES ,FONTSIZES} from './consts';
import { StyledCircularProgress, StyledRating, BoxLayout } from './styles';

export const Progressive = ({ vote_average }) => {
	const vote =Math.round( vote_average*10);


	return (
		<BoxLayout right={SHIFT} >
			<StyledCircularProgress variant="determinate" value={vote} size={SIZES} color="warning"/>
			<Box
				sx={{
					left: 0,
					bottom: 0,
					position: 'absolute',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					right: 0,
					top: 0,
					
				}}
			>
				<StyledRating  color="success.main"
			fontsizes={FONTSIZES}
				>
					{`${vote}`}<sup>%</sup>
				</StyledRating>
			</Box>
		</BoxLayout>)
}