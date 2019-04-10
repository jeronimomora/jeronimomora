import React from 'react'
import { Typography } from 'antd'

const { Title } = Typography;

const SectionHeader = React.forwardRef((props, ref) => (
	<div ref={ref}>
		<Title level={3}>{props.header || "Section header"}</Title>
	</div>
))

export default SectionHeader