import React from 'react'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'

const generateBulletedList = (itemArray) => (
  <List disablePadding={true}>{
  itemArray.map((item, index) => {
      return <ListItem key={index} style={{ paddingTop: 1, paddingBottom: 1}}>
              <ListItemText primaryTypographyProps={{variant: 'body1'}}>{item}</ListItemText>
            </ListItem>
    })
  }
  </List>
)

const fictivContentItems = [
`• Wrote software in C++ and Python to process CAD part files and predict the cost of manufacturing`,
`• Used mechanical engineering knowledge to write software that gives automatic DFM feedback`,
`• Used genetic algorithm to analyze historical orders and predict pricing parameters`,
`• Worked in a cross-functional software team to architect and create a new 3D model viewer in THREE.js to enable DFM visualizations`,
]

const fictiv_cge1 = {
	title: 'Computational Geometry Engineer I',
  institution: 'Fictiv',
	city: "San Francisco, CA",
	date: "September 2018 - November 2018",
}

const fictiv_cge2 = {
  title: 'Computational Geometry Engineer II',
  institution: 'Fictiv',
  city: "San Francisco, CA",
  date: "November 2018 - Present",
  content: generateBulletedList(fictivContentItems)
}

const llnlContentItems = [
  `• Researched new light-directed electrophoretic deposition (EPD) techniques`,
  `• Developed software using Python to control 3D Printers and allow users to selectively cancel parts on the bed`,
  `• Wrote LabVIEW software to interface with hardware pumps and automate the EPD process`,
  <>• First author of paper published in <a href="https://www.sciencedirect.com/science/article/pii/S2214860418300976" target="_blank" rel="noopener noreferrer">Additive Manufacturing</a></>,
  <>• Second author of paper published in <a href="https://www.scientific.net/KEM.654.261" target="_blank" rel="noopener noreferrer">Key Engineering Materials</a></>,
  `• Inventor on 2 patents filed based on research I performed`,
  `• Presented work at a Materials Research Society conference in Phoenix, CA`,
  `• Work I performed presented by mentors in Austin (TX), Austria and South Korea`,
]

const llnl = {
	title: 'Engineering Intern',
  institution: 'Livermore National Laboratory',
	city: 'Livermore, CA',
	date: 'May 2014 - August 2017 (Seasonal)',
	content: generateBulletedList(llnlContentItems)
}

const ucdavisContentItems = [
  <>• Author of paper published in <a href="https://pubs.acs.org/doi/10.1021/acs.langmuir.9b00313" target="_blank" rel="noopener noreferrer">Langmuir</a></>,
  `• Prepare particle suspensions, measured their conductivities and pH`,
  `• Used confocal microscope to study height bifurcation of colloids in basic solution when subject to AC electric fields`
]

const ucdavis = {
	title: 'Undergraduate Research Assistant II',
  institution: 'UC Davis',
	city: 'Davis, CA',
	date: 'October 2015 - June 2016',
	content: generateBulletedList(ucdavisContentItems)
}

export default Object.freeze([fictiv_cge2, fictiv_cge1, llnl, ucdavis])