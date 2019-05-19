import React, { Component } from 'react';
import Experience from './Experience'
import CareerProfile from './CareerProfile'
import SectionHeader from './SectionHeader'
import NavBar from './NavBar'
import Visualization from './Visualization'
import jobs from '../fixtures/jobs'
import degrees from '../fixtures/degrees'
import projects from '../fixtures/projects'
import '../styles/App.css'

class App extends Component {
  constructor(){
    super()
    this.careerProfileRef = React.createRef()
    this.workExperienceRef = React.createRef()
    this.educationRef = React.createRef()
    this.projectsRef = React.createRef()
    this.state = {
      width: window.innerWidth,
    };
  }
  componentWillMount() {
    window.addEventListener('resize', this.onWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowSizeChange);
  }
  scrollTo({ top }){
    window.scrollTo({ top, behavior: 'smooth' })
  }
  onWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  }
  onMenuClick(section){
    switch(section){
      case 'CAREER_PROFILE':
        this.scrollTo({ top: this.careerProfileRef.current.offsetTop - 75 })
        break      
      case 'WORK_EXPERIENCE':
        this.scrollTo({ top: this.workExperienceRef.current.offsetTop - 75 })
        break
      case 'EDUCATION':
        this.scrollTo({ top: this.educationRef.current.offsetTop - 75 })
        break
      case 'PROJECTS':
        this.scrollTo({ top: this.projectsRef.current.offsetTop - 75 })
        break
      default:
    }
  } 
  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    return (
        <div>
          <div style={{ overflow: 'auto', display: 'flex', justifyContent: 'center', background: '#e7e7e7'}}>
            <NavBar onMenuClick={this.onMenuClick.bind(this)} isMobile={isMobile}/>
            <div style={{ marginTop: 84, width: 500, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <SectionHeader header={"Career Profile"} ref={this.careerProfileRef}/>
                <CareerProfile />
                <SectionHeader header={"Work Experience"} ref={this.workExperienceRef}/>
                <Experience experiences={jobs}/>              
                <SectionHeader header={"Education"} ref={this.educationRef}/>
                <Experience experiences={degrees} />              
                <SectionHeader header={"Projects"} ref={this.projectsRef}/>
                <Experience experiences={projects} />
            </div>
          </div>
        </div>
    );
  }
}

export default App;