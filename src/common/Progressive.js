import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export const Progressive = ({ vote_average }) => {
	const vote =Math.round( vote_average*10);

	return (
		<Box sx={{
			position: 'relative',
			display: 'inline-flex',
			top: '56px',
			right: '50px',
			backgroundColor:'black',
			borderRadius:'50%',
			fontWeight:'700',
			
		}}>
			<CircularProgress variant="determinate" value={vote} size="4rem" color="warning"/>
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
				<Typography variant="caption" component="div" color="success.main"
				sx={{fontSize:'1.2em', fontWeight:'700'}} 
				>
					{`${vote}`}<sup>%</sup>
				</Typography>
			</Box>
		</Box>)
}