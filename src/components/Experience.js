import React from 'react'
import ExperienceItem from './ExperienceItem'
import '../styles/Experience.css'

const Experience = (props) => (
	<div style={{ marginBottom: 15 }} >
		{props.experiences.map((experience, index) => {
			return <ExperienceItem key={index} {...experience}/>
		})}
	 </div>
)

export default Experience