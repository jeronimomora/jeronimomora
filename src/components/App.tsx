import React, { Component } from 'react'
import Experience from './Experience'
import CareerProfile from './CareerProfile'
import SectionHeader from './SectionHeader'
import NavBar from './NavBar'
import jobs from '../staticData/jobs'
import degrees from '../staticData/degrees'
import navigationConstants, { NavigationConstantType } from '../staticData/navigationConstants'
import backgroundImage from '../images/background.png'
import Skills from './Skills'

import '../styles/App.css'

const SECTION_MARGIN_TOP = 75

const getIsCompact = (windowWidth: number) => (windowWidth <= 500)

class App extends Component {
  careerProfileRef: React.RefObject<HTMLDivElement>
  workExperienceRef: React.RefObject<HTMLDivElement>
  skillsRef: React.RefObject<HTMLDivElement>
  educationRef: React.RefObject<HTMLDivElement>
  projectsRef: React.RefObject<HTMLDivElement>
  state: {
    isCompact: boolean
  }
  constructor(props: {}){
    super(props)
    this.careerProfileRef = React.createRef<HTMLDivElement>()
    this.workExperienceRef = React.createRef<HTMLDivElement>()
    this.skillsRef = React.createRef<HTMLDivElement>()
    this.educationRef = React.createRef<HTMLDivElement>()
    this.projectsRef = React.createRef<HTMLDivElement>()
    this.state = {
      isCompact: getIsCompact(window.innerWidth),
    }
  }
  componentWillMount() {
    window.addEventListener('resize', this.onWindowSizeChange)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowSizeChange)
  }
  scrollTo({ top }: { top: number }){
    window.scrollTo({ top, behavior: 'smooth' })
  }
  onWindowSizeChange = () => {
    this.setState({ isCompact: getIsCompact(window.innerWidth) })
  }
  onMenuClick(section: NavigationConstantType){
    switch(section){
      case navigationConstants.CAREER_PROFILE:
        this.scrollTo({ top: this.careerProfileRef.current!.offsetTop - SECTION_MARGIN_TOP })
        break      
      case navigationConstants.SKILLS:
        this.scrollTo({ top: this.skillsRef.current!.offsetTop - SECTION_MARGIN_TOP })
        break
      case navigationConstants.WORK_EXPERIENCE:
        this.scrollTo({ top: this.workExperienceRef.current!.offsetTop - SECTION_MARGIN_TOP })
        break
      case navigationConstants.EDUCATION:
        this.scrollTo({ top: this.educationRef.current!.offsetTop - SECTION_MARGIN_TOP })
        break
      default:
    }
  } 
  render() {
    const { isCompact } = this.state

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
            </div>
        </div>
    )
  }
}

export default App