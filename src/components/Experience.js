import React from 'react'
import ExperienceItem from './ExperienceItem'
import '../styles/Experience.css'

const Experience = (props) => (
	<div style={{ marginBottom: 15 }} >
		{props.experiences.map((experience) => {
			return <ExperienceItem {...experience}/>
		})}
	 </div>
)

export default Experience