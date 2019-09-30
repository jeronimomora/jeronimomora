import React from 'react'
import Typography from '@material-ui/core/Typography';
import '../styles/ExperienceItem.css'

const ExperienceItem = ({title, institution, city, date, content, isCompact}) => (
	<div className="experience-item">
		{
			isCompact ? 
		<div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
			<Typography variant="h6">{title}</Typography>
			<Typography variant="h6">{institution}</Typography>
		</div>

		:

		<div style={{ color: 'white', display: 'flex', justifyContent: 'space-between'}}>
			<Typography variant="h6">{title}</Typography>
			<Typography variant="h6">{institution}</Typography>
		</div>

		}
		<div style={{ display: 'flex', justifyContent: 'space-between'}}>
			<Typography variant="body1">{city}</Typography>
			<Typography variant="body1">{date}</Typography>
		</div>
		<div style={{ marginTop: 0 }}>{content}</div>
	</div>
)

export default ExperienceItem