import React, { Component } from 'react';
import { Layout, Menu } from 'antd'
import Experience from './Experience'
import CareerProfile from './CareerProfile'
import SectionHeader from './SectionHeader'
import jobs from '../fixtures/jobs'
import degrees from '../fixtures/degrees'
import projects from '../fixtures/projects'
import '../styles/App.css'

const { Header, Content, } = Layout

class App extends Component {
  constructor(){
    super()
    this.careerProfileRef = React.createRef()
    this.workExperienceRef = React.createRef()
    this.educationRef = React.createRef()
    this.projectsRef = React.createRef()
  }
  scrollTo({ top }){
    window.scrollTo({ top, behavior: 'smooth' })
  }
  onMenuClick({ item, key, keyPath }){
    switch(key){
      case '0':
        this.scrollTo({ top: this.careerProfileRef.current.offsetTop - 64 })
        break      
      case '1':
        this.scrollTo({ top: this.workExperienceRef.current.offsetTop - 64 })
        break
      case '2':
        this.scrollTo({ top: this.educationRef.current.offsetTop - 64 })
        break
      case '3':
        this.scrollTo({ top: this.projectsRef.current.offsetTop - 64 })
        break
      default:
    }
  } 
  render() {
    return (
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div style={{ float: 'left', color: 'white', margin: 'auto'}}>Jeronimo Mora </div>
            <Menu
              theme="dark"
              mode="horizontal"
              style={{ margin: 'auto', lineHeight: '64px' }}
              onClick={this.onMenuClick.bind(this)}
            >
              <Menu.Item key="0">CareerProfile</Menu.Item>
              <Menu.Item key="1">Work Experience</Menu.Item>
              <Menu.Item key="2">Education</Menu.Item>
              <Menu.Item key="3">Projects</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ display: 'flex', flexDirection: 'column', marginTop: 64, marginLeft: 200, marginRight: 200, marginBottom: 32 }}>
              <CareerProfile ref={this.careerProfileRef}/>
              <SectionHeader header={"Work Experience"} ref={this.workExperienceRef}/>
              <Experience experiences={jobs}/>              
              <SectionHeader header={"Education"} ref={this.educationRef}/>
              <Experience experiences={degrees} />              
              <SectionHeader header={"Projects"} ref={this.projectsRef}/>
              <Experience experiences={projects} />
          </Content>
        </Layout>
    );
  }
}

export default App;
