import React, { Component } from 'react';
import { Layout } from 'antd'
import Sidebar from './Sidebar'
import Experience from './Experience'
import CareerProfile from './CareerProfile'
import SectionHeader from './SectionHeader'
import '../styles/App.css'

const { Sider, Content, Footer } = Layout

const siderMargin = 200
const padding = 50

class App extends Component {
  render() {
    return (
        <Layout>
          <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, width: siderMargin}}>
            <Sidebar />
          </Sider>
          <Layout style={{ marginLeft: siderMargin + padding, marginRight: padding, marginBottom: 20 }}>
            <Content style={{ marginTop: 20 }}>
              <CareerProfile />
              <SectionHeader header={"Work Experience"}/>
              <Experience />              
              <SectionHeader />
              <Experience />
            </Content>
          </Layout>
        </Layout>
    );
  }
}

export default App;
