import React from 'react'
import Typography from '@material-ui/core/Typography'
import '../styles/ExperienceItem.css'

type PropsType = {
	title: string
	institution: string
	city: string
	date: string
	isCompact: boolean
}

const ExperienceItem = ({ 
	title,
	institution,
	city,
	date,
	isCompact
}: PropsType) => (
	<div className="experience-item">
		{
			isCompact ? 
		<div style={{ display: 'flex', justifyContent: 'center', marginLeft: 30, marginRight: 30, flexDirection: 'column'}}>
			<Typography variant="h6">{title}</Typography>
			<Typography variant="h6">{institution}</Typography>
			<Typography variant="body1">{city}</Typography>
			<Typography variant="body1">{date}</Typography>
		</div>

		:
		
		<div>
			<div style={{ color: 'white', display: 'flex', justifyContent: 'space-between'}}>
				<Typography variant="h6">{title}</Typography>
				<Typography variant="h6">{institution}</Typography>
			</div>

			<div style={{ display: 'flex', justifyContent: 'space-between'}}>
				<Typography variant="body1">{city}</Typography>
				<Typography variant="body1">{date}</Typography>
			</div>

		</div>
		}		
	</div>
)

export default ExperienceItem