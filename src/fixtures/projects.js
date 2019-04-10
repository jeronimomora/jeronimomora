import React from 'react'

const masters = {
	title: 'Investigation into Energy Efficiency of Vector Field Based CNC Toolpaths',
	content: (
		<div>

			<span><a href="https://drive.google.com/file/d/1DcDcItmi-_8l05dJRQT51-WO9Wz7RA0E/view?usp=sharing" 
			target="_blank"
			rel="noopener noreferrer">
				Compiled, modified, and integrated C++ software </a>
				for the generation of vector-field based toolpaths 
				for CNC machining. Improved process efficiency of previous approach by over 6.5%. 
				Discovered systematic errors in previously published work and implemented improvements 
				to experiments in order to make data collection more meaningful.
			</span>            
        </div>
        ),
}
const cncCV = {
	title: '3D Printer Word Search Solver',
	content: (
		<div>
			<span><a href="https://www.youtube.com/watch?v=JgW0SBVrisc" 
			target="_blank"
			rel="noopener noreferrer">
				Used optical character recognition to solve word search puzzles. </a> 
				Code generates g-code for a 3D printer such that it can solve the puzzles with an 
				attached writing instrument. Designed a suitable writing instrument attachment for 
				my 3D printer's toolhead.
			</span>               
        </div>
        ),
}

const embeddedSensors = {
	title: 'Embedded Sensors in Additively Manufactured Parts',
	content: (
		<div>
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
		</div>
	),
}

export default [masters, cncCV, embeddedSensors]