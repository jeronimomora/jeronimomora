import React, { Component } from 'react'
import Experience from './Experience'
import CareerProfile from './CareerProfile'
import SectionHeader from './SectionHeader'
import NavBar from './NavBar'
import jobs from '../staticData/jobs'
import degrees from '../staticData/degrees'
import projects from '../staticData/projects'
import navigationConstants from '../staticData/navigationConstants'
import backgroundImage from '../images/background.png'
import Skills from './Skills'

import '../styles/App.css'

const SECTION_MARGIN_TOP = 75
export const NAV_COLOR = '#333333'
export const NAV_HOVER_COLOR = '#444444'

class App extends Component {
  constructor(){
    super()
    this.careerProfileRef = React.createRef()
    this.workExperienceRef = React.createRef()
    this.skillsRef = React.createRef()
    this.educationRef = React.createRef()
    this.projectsRef = React.createRef()
    this.state = {
      width: window.innerWidth,
    }
  }
  componentWillMount() {
    window.addEventListener('resize', this.onWindowSizeChange)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowSizeChange)
  }
  scrollTo({ top }){
    window.scrollTo({ top, behavior: 'smooth' })
  }
  onWindowSizeChange = () => {
    this.setState({ width: window.innerWidth })
  }
  onMenuClick(section){
    switch(section){
      case navigationConstants.CAREER_PROFILE:
        this.scrollTo({ top: this.careerProfileRef.current.offsetTop - SECTION_MARGIN_TOP })
        break      
      case navigationConstants.SKILLS:
        this.scrollTo({ top: this.skillsRef.current.offsetTop - SECTION_MARGIN_TOP })
        break
      case navigationConstants.WORK_EXPERIENCE:
        this.scrollTo({ top: this.workExperienceRef.current.offsetTop - SECTION_MARGIN_TOP })
        break
      case navigationConstants.EDUCATION:
        this.scrollTo({ top: this.educationRef.current.offsetTop - SECTION_MARGIN_TOP })
        break
      case navigationConstants.PROJECTS:
        this.scrollTo({ top: this.projectsRef.current.offsetTop - SECTION_MARGIN_TOP })
        break
      default:
    }
  } 
  render() {
    const { width } = this.state
    const isCompact = width <= 500

    return (
        <div className='app' style ={{ backgroundImage: `url(${backgroundImage})`}}>
            <NavBar onMenuClick={this.onMenuClick.bind(this)} isCompact={isCompact}/>
            <div className='app-sections' style={{ marginTop: SECTION_MARGIN_TOP}}>
                <SectionHeader header={"Welcome!"} ref={this.careerProfileRef}/>
                <CareerProfile isCompact={isCompact}/>
                <SectionHeader header={"Skills"} ref={this.skillsRef}/>
                <Skills />
                <SectionHeader header={"Work Experience"} ref={this.workExperienceRef}/>
                <Experience experiences={jobs} isCompact={isCompact}/>              
                <SectionHeader header={"Education"} ref={this.educationRef}/>
                <Experience experiences={degrees} isCompact={isCompact}/>              
                <SectionHeader header={"Projects"} ref={this.projectsRef}/>
                <Experience experiences={projects} isCompact={isCompact}/>
            </div>
        </div>
    )
  }
}

export default App