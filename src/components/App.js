import React, { Component } from 'react';
import Experience from './Experience'
import CareerProfile from './CareerProfile'
import SectionHeader from './SectionHeader'
import NavBar from './NavBar'
import jobs from '../fixtures/jobs'
import degrees from '../fixtures/degrees'
import projects from '../fixtures/projects'
import navigationConstants from '../fixtures/navigationConstants'
import backgroundImage from '../images/background.png'
import '../styles/App.css'

const SECTION_MARGIN_TOP = 75

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
      case navigationConstants.CAREER_PROFILE:
        this.scrollTo({ top: this.careerProfileRef.current.offsetTop - SECTION_MARGIN_TOP })
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
    const { width } = this.state;
    const shouldHaveNavigationMenu = width <= 850;
    const isCompact = width <= 425;

    return (
        <div style ={{ backgroundImage: `url(${backgroundImage})`, backgroundAttachment: 'fixed' }}>
          <div style={{ overflow: 'auto', display: 'flex', justifyContent: 'center'}}>
            <NavBar onMenuClick={this.onMenuClick.bind(this)} isCompact={isCompact} shouldHaveNavigationMenu={shouldHaveNavigationMenu}/>
            <div style={{ marginTop: SECTION_MARGIN_TOP, width: 500, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <SectionHeader header={"Career Profile"} ref={this.careerProfileRef}/>
                <CareerProfile />
                <SectionHeader header={"Work Experience"} ref={this.workExperienceRef}/>
                <Experience experiences={jobs} isCompact={isCompact}/>              
                <SectionHeader header={"Education"} ref={this.educationRef}/>
                <Experience experiences={degrees} isCompact={isCompact}/>              
                <SectionHeader header={"Projects"} ref={this.projectsRef}/>
                <Experience experiences={projects} />
            </div>
          </div>
        </div>
    );
  }
}

export default App;