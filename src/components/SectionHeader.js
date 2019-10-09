import React from 'react'
import Typography from '@material-ui/core/Typography'
import '../styles/SectionHeader.css'

const SectionHeader = React.forwardRef((props, ref) => (
	<div ref={ref} className="section-header">
		<Typography variant="h4">{props.header || "Section header"}</Typography>
	</div>
))

export default SectionHeader