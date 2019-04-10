import React from 'react'
import { List, Row, Col } from 'antd';
import '../styles/Experience.css'

const Experience = (props) => (
	<div>
		<List
		    itemLayout="vertical"
		    size="large"
		    bordered={true}
		    dataSource={props.experiences}
		    renderItem={item => (
		      <List.Item
		        key={item.title}
		        extra={item.extra}
		      >
		      	<p className="experience-title">{item.title}</p>
		        <Row>
		        	<Col span={6}>{item.city}</Col>
		        	<Col span={6} offset={6}>{item.date}</Col>
		        </Row>
		        {item.content}
		      </List.Item>
		    )}
		  />
	 </div>
)

export default Experience