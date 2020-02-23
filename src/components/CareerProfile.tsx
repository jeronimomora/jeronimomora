import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import jeronimo from '../images/jeronimo.jpeg'
import '../styles/CareerProfile.css'

const StyledAvatar = withStyles(theme => ({
	root: {
		margin: 'auto',
		marginBottom: 15,
		height: 200,
		width: 200,
		display: 'flex',
		justifyContent: 'center'
	},
}))(Avatar)

type PropsType = {
	isCompact: boolean
}

const CareerProfile = (props: PropsType) => (
	<div className='career-profile'>
		<StyledAvatar
			src={jeronimo}
		/>
		<Typography variant='body1' style={props.isCompact ? { marginLeft: 30, marginRight: 30 }: undefined }> 
		Software engineer, mechanical engineer, inventor, published scientist, lifelong learner, 
		and professional scrum master with a knack and passion for agile problem solving. 
		</Typography>
	</div>
)

export default CareerProfile