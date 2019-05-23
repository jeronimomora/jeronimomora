import React from 'react'
import Typography from '@material-ui/core/Typography';

const website = {
	title: 'This website!',
	content: (
		<Typography variant='body1'>
			Used React and material-ui components to structure and build this website.
			Building this website allowed me to practice a new skill (front-end javascript)
			and make something I thought was rather cool! The website is deployed to Firebase.
        </Typography>
        ),
}

const masters = {
	title: 'Investigation into Energy Efficiency of Vector Field Based CNC Toolpaths',
	content: (
		<Typography variant='body1'>
			<span><a href="https://drive.google.com/file/d/1DcDcItmi-_8l05dJRQT51-WO9Wz7RA0E/view?usp=sharing" 
			target="_blank"
			rel="noopener noreferrer">
				Compiled, modified, and integrated C++ software </a>
				for the generation of vector-field based toolpaths 
				for CNC machining. Improved process efficiency of previous approach by over 6.5%. 
				Discovered systematic errors in previously published work and implemented improvements 
				to experiments in order to make data collection more meaningful.
			</span>            
        </Typography>
        ),
}

const cncCV = {
	title: '3D Printer Word Search Solver',
	content: (
		<Typography variant='body1'>
			<span><a href="https://www.youtube.com/watch?v=JgW0SBVrisc" 
			target="_blank"
			rel="noopener noreferrer">
				Used optical character recognition to solve word search puzzles. </a> 
				Code generates g-code for a 3D printer such that it can solve the puzzles with an 
				attached writing instrument. Designed a suitable writing instrument attachment for 
				my 3D printer's toolhead.
			</span>               
        </Typography>
        ),
}

const embeddedSensors = {
	title: 'Embedded Sensors in Additively Manufactured Parts',
	content: (
		<Typography variant='body1'>
			<span>
				<a href="https://drive.google.com/file/d/1JvvQqei_BCs0VS8OonA56zBQjIQKNBGk/view?usp=sharing" 
				target="_blank"
				rel="noopener noreferrer">
				UC Davis Mechanical Engineering senior project </a>
                exploring the feasibility and accuracy of embedded sensors in 3D printed parts. 
                Compared experimental beam strains to CAD simulations.
				Created Wheatstone bridge circuit to measure internal strains in 3D 
				printed beams using embedded strain gauges
			</span>
		</Typography>
	),
}

export default Object.freeze([website, masters, cncCV, embeddedSensors])