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
			 	  style={{ marginLeft: 125, height: 200, width: 200, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
		          src={jeronimo}
		          component="img"
		          title="Jeronimo Mora"
		        />
				<Typography variant='body1'> 
					Computational geometry engineer at Fictiv and UC Berkeley graduate with an M.S. in Mechanical Engineering. 
					Experience in C++, Python, THREE.js, DFM/DFx and more. Over 4 summers' worth of work experience as an intern at 
					Lawrence Livermore National Laboratory doing research, CAD, and programming. Coursework in fields as varied as 
					Artificial Intelligence, Mechanical Behavior of Materials, and Lean Manufacturing. Inventor on 2 filed patents, 
					author on 2 published papers, and author of 1 paper in preparation for submission. 
				</Typography>
			</CardContent>
		</Card>
	</div>
)

export default CareerProfile