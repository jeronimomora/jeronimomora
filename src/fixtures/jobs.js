import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const fictiv = {
	title: 'Computational Geometry Engineer I/II - Fictiv',
	city: "San Francisco, CA",
	date: "September 2018 - Present",
	content: (
		<List dense>
			<ListItem><ListItemText>Wrote software in C++ and Python to process CAD part files and predict the cost of manufacturing</ListItemText></ListItem>
			<ListItem><ListItemText>Used mechanical engineering knowledge to write software that gives automatic DFM feedback</ListItemText></ListItem>
			<ListItem><ListItemText>Wrote custom Genetic Algorithm to analyze historical orders and make predictions</ListItemText></ListItem>
			<ListItem><ListItemText>Worked in a cross-functional software team to architect and create a new 3D model viewer in THREE.js to enable DFM visualizations</ListItemText></ListItem>
		</List>
	)
}

const llnl = {
	title: 'Engineering Intern - Lawrence Livermore National Laboratory',
	city: 'Livermore, CA',
	date: 'May 2014 - August 2017 (Seasonal)',
	content: (
      <List dense>
        <ListItem><ListItemText>Researched new light-directed electrophoretic deposition (EPD) techniques</ListItemText></ListItem>
        <ListItem><ListItemText>Developed software using Python to control 3D Printers and allow users to selectively cancel parts on the bed</ListItemText></ListItem>
        <ListItem><ListItemText>Wrote LabVIEW software to interface with hardware pumps and automate the EPD process</ListItemText></ListItem>
        <ListItem><ListItemText>Used SOLIDWORKS to design fixtures and adapters necessary for experiments</ListItemText></ListItem>
        <ListItem><ListItemText>Created the first draft of safety guidelines for a new microcapsule fabrication process</ListItemText></ListItem>
        <ListItem><ListItemText>
        	<ListItemText>Synthesized Li<sub>7</sub>La<sub>3</sub>Zr<sub>2</sub>O<sub>12</sub> and characterized it using X-Ray diffraction</ListItemText>
        </ListItemText></ListItem>
        <ListItem><ListItemText>First author of paper published in <a href="https://www.sciencedirect.com/science/article/pii/S2214860418300976" target="_blank" rel="noopener noreferrer">Additive Manufacturing</a></ListItemText></ListItem>
        <ListItem><ListItemText>First author of 1 paper currently in process of submission</ListItemText></ListItem>
        <ListItem><ListItemText>Second author of paper published in <a href="https://www.scientific.net/KEM.654.261" target="_blank" rel="noopener noreferrer">Key Engineering Materials</a></ListItemText></ListItem>
        <ListItem><ListItemText>Inventor on 2 patents filed based on research I performed</ListItemText></ListItem>
        <ListItem><ListItemText>Presented work at a Materials Research Society conference in Phoenix, CA</ListItemText></ListItem>
        <ListItem><ListItemText>Work I performed presented by mentors in Austin (TX), Austria and South Korea</ListItemText></ListItem>
      </List>
	)
}

const ucdavis = {
	title: 'Undergraduate Research Assistant II - UC Davis',
	city: 'Davis, CA',
	date: 'October 2015 - June 2016',
	content: (
              <List dense>
              	<ListItem><ListItemText>Prepare particle suspensions, measured their conductivities and pH</ListItemText></ListItem>
              	<ListItem><ListItemText>Used confocal microscope to study height bifurcation of colloids in basic solution when subject to AC electric fields</ListItemText></ListItem>  
              </List>
            )
}

export default [fictiv, llnl, ucdavis]