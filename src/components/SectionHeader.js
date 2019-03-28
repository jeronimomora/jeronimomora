import React from 'react'
import { Typography } from 'antd';

const { Title } = Typography;

const SectionHeader = (props) => (
	<Title level={3}>{props.header || "Section header"}</Title>
)

export default SectionHeader