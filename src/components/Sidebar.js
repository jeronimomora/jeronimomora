import React from 'react'
import { Typography } from 'antd'
import { Button } from 'antd'
import { Row, Col } from 'antd'
import { Avatar } from 'antd'

import image from '../images/jeronimo.png'

const { Title } = Typography

const Sidebar = () => (
	<div>
		<Row type="flex" justify="center">
			<Avatar size={64} src={image} />
		</Row>
		<Title level={3}>Jeronimo Mora</Title>
		<Title level={4}>Computational Geometry Engineer II at Fictiv</Title>
		<br></br>
		<Row>
			<Col>
				<Button type="primary" ghost>Education</Button>
			</Col>
			<Col>
				<Button type="primary" ghost>Work Experience</Button>
			</Col>
			<Col>
				<Button type="primary" ghost>Projects</Button>
			</Col>
			<Col>
				<Button type="primary" ghost>Skills</Button>
			</Col>
		</Row>
	</div>
)

export default Sidebar