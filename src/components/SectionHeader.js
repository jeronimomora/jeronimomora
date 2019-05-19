import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const SectionHeader = React.forwardRef((props, ref) => (
	<div ref={ref}>
		<Card>
			<CardContent style = {{ padding: 5, display: 'flex', justifyContent: 'center' }}>
				<Typography variant="h4">{props.header || "Section header"}</Typography>
			</CardContent>
		</Card>
	</div>
))

export default SectionHeader