import React from 'react'
import ItemHeader from './ItemHeader'
import '../styles/ExperienceItem.css'
import { Row, Col } from 'antd';

const ExperienceItem = ({header, location, date, content}) => (
	<div className="experience-item">
		<Row>
			<ItemHeader header={header}/>
		</Row>
		<Row type="flex" justify="space-between">
			{location ? (<Col>{location}</Col>) : null}
			{date ? (<Col>{date}</Col>) : null}
		</Row>
		<p>{content}</p>
	</div>
)

export default ExperienceItem