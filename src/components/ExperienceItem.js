import React from 'react'
import Typography from '@material-ui/core/Typography'
import '../styles/ExperienceItem.css'

const ExperienceItem = ({title, institution, city, date, content, isCompact}) => (
	<div className="experience-item">
		{
			isCompact ? 
		<div style={{ display: 'flex', justifyContent: 'center', marginLeft: 30, marginRight: 30, flexDirection: 'column'}}>
			<Typography variant="h6">{title}</Typography>
			<Typography variant="h6">{institution}</Typography>
			<Typography variant="body1">{city}</Typography>
			<Typography variant="body1">{date}</Typography>
			{content ? <div style={{ marginTop: 30 }}>{content}</div> : null}
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

			<div style={{ marginTop: 30 }}>{content}</div>
		</div>
		}		
	</div>
)

export default ExperienceItem