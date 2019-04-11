import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import jeronimo from '../images/jeronimo.png'
import '../styles/CareerProfile.css'

const CareerProfile = (props) => (
	<div style={{ marginBottom: 15 }}>
		<Card style={{ marginTop: 15 }}>
			<CardContent>
			 	<CardMedia
			 	  style={{ marginLeft: 125, marginBottom: 10, height: 200, width: 200, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
		          src={jeronimo}
		          component="img"
		          title="Jeronimo Mora"
		        />
				<Typography variant='body1'> 
					Computational geometry engineer at Fictiv and UC Berkeley graduate with an M.S. in Mechanical Engineering. 
					Experience in C++, Python, THREE.js, React, DFM/DFx, CAD/CAM and more. Inventor on 2 filed patents, author on 2 published papers.
				</Typography>
			</CardContent>
		</Card>
	</div>
)

export default CareerProfile