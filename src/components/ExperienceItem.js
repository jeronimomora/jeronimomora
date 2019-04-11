import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const ExperienceItem = ({title, institution, city, date, content}) => (
	<div>
		<Card style={{ marginTop: 15 }}>
			<CardContent>
				<div style={{ display: 'flex', justifyContent: 'space-between'}}>
					<Typography variant="subtitle1">{title}</Typography>
					<Typography variant="subtitle1">{institution}</Typography>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between'}}>
					<Typography variant="body2">{city}</Typography>
					<Typography variant="body2">{date}</Typography>
				</div>
				<div style={{ marginTop: 0 }}>{content}</div>
			</CardContent>
		</Card>
	</div>
)

export default ExperienceItem