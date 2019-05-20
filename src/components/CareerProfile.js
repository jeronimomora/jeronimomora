import React from 'react'
import Card from '@material-ui/core/Card'
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import jeronimo from '../images/jeronimo.png'
import '../styles/CareerProfile.css'

const CareerProfile = (props) => (
	<div style={{ marginBottom: 15 }}>
		<Card style={{ marginTop: 15 }}>
			<CardContent>
			 	<Avatar
			 	  style={{ margin: 'auto', marginBottom: 15, height: 200, width: 200, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
		          src={jeronimo}
		        />
				<Typography variant='body1'> 
					Computational geometry engineer at Fictiv and UC Berkeley graduate with an M.S. in Mechanical Engineering. 
					Experience in C++, Python, THREE.js, React, DFM/DFx, CAD/CAM and more. Inventor on 2 filed patents, author on 3 published papers.
				</Typography>
			</CardContent>
		</Card>
	</div>
)

export default CareerProfile