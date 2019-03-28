import React from 'react'
import ExperienceItem from './ExperienceItem'
import { fictiv, llnl } from '../fixtures/jobs'
import { List, Avatar, Icon, Row, Col, Typography } from 'antd';

const { Title } = Typography;

const listData = [];
listData.push(fictiv);
listData.push(llnl);

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Experience = () => (
	<div>
		<List
		    itemLayout="vertical"
		    size="large"
		    bordered={true}
		    dataSource={listData}
		    renderItem={item => (
		      <List.Item
		        key={item.title}
		        //extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
		      >
		      	<Title level={4}>{item.title}</Title>
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