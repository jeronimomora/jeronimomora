import React from 'react'
import Typography from '@material-ui/core/Typography';

const SectionHeader = React.forwardRef((props, ref) => (
	<div ref={ref}>
		<Typography variant="h4">{props.header || "Section header"}</Typography>
	</div>
))

export default SectionHeader