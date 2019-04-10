import React from 'react'
import SectionHeader from './SectionHeader'
import '../styles/CareerProfile.css'

const CareerProfile = React.forwardRef((props, ref) => (
	<div className="career-profile" ref={ref}>
		<SectionHeader header={"Career Profile"}/>
		<p> 
			Computational geometry engineer at Fictiv and UC Berkeley graduate with an M.S. in Mechanical Engineering. 
			Experience in C++, Python, THREE.js, DFM/DFx and more. Over 4 summers' worth of work experience as an intern at 
			Lawrence Livermore National Laboratory doing research, CAD, and programming. Coursework in fields as varied as 
			Artificial Intelligence, Mechanical Behavior of Materials, and Lean Manufacturing. Inventor on 2 filed patents, 
			author on 2 published papers, and author of 1 paper in preparation for submission. 
		</p>
	</div>
))

export default CareerProfile