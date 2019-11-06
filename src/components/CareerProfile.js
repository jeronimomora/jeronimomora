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

const CareerProfile = (props) => (
	<div className='career-profile'>
		<StyledAvatar
			src={jeronimo}
		/>
		<Typography variant='body1' style={props.isCompact ? { marginLeft: 15, marginRight: 15 }: null }> 
			Computational geometry engineer at Fictiv and UC Berkeley graduate with an M.S. in Mechanical Engineering. 
			Experience in C++, Python, THREE.js, React, GraphQL, DFM/DFx, CAD/CAM and more. Inventor on 1 issued patent (2 filed), author on 3 published papers.
		</Typography>
	</div>
)

export default CareerProfile