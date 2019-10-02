import React from 'react'
import ExperienceItem from './ExperienceItem'

const Experience = (props) => (
	<div>
		{props.experiences.map((experience, index) => {
			return <ExperienceItem key={index} isCompact={props.isCompact} {...experience}/>
		})}
	 </div>
)

export default Experience