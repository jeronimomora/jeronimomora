import React from 'react'

const fictiv = {
	title: 'Computational Geometry Engineer I/II - Fictiv',
	city: "San Francisco, CA",
	date: "September 2018 - Present",
	content: (
		<ul>
			<li>Wrote software in C++ and Python to process CAD part files and predict the cost of manufacturing</li>
			<li>Used mechanical engineering knowledge to write software that gives automatic DFM feedback</li>
			<li>Wrote custom Genetic Algorithm to analyze historical orders and make predictions</li>
			<li>Worked in a cross-functional software team to architect and create a new 3D model viewer in THREE.js to enable DFM visualizations</li>
		</ul>
	)
}

const llnl = {
	title: 'Engineering Intern - Lawrence Livermore National Laboratory',
	city: 'Livermore, CA',
	date: 'May 2014 - August 2017 (Seasonal)',
	content: (
      <ul>
        <li>Researched new light-directed electrophoretic deposition (EPD) techniques</li>
        <li>Developed software using Python to control 3D Printers and allow users to selectively cancel parts on the bed</li>
        <li>Wrote LabVIEW software to interface with hardware pumps and automate the EPD process</li>
        <li>Used SOLIDWORKS to design fixtures and adapters necessary for experiments</li>
        <li>Created the first draft of safety guidelines for a new microcapsule fabrication process</li>
        <li>Synthesized Li<sub>7</sub>La<sub>3</sub>Zr<sub>2</sub>O<sub>12</sub> and characterized it using X-Ray diffraction</li>
        <li>First author of paper published in <a href="https://www.sciencedirect.com/science/article/pii/S2214860418300976" target="_blank" rel="noopener noreferrer">Additive Manufacturing</a></li>
        <li>First author of 1 paper currently in process of submission</li>
        <li>Second author of paper published in <a href="https://www.scientific.net/KEM.654.261" target="_blank" rel="noopener noreferrer">Key Engineering Materials</a></li>
        <li>Inventor on 2 patents filed based on research I performed</li>
        <li>Presented work at a Materials Research Society conference in Phoenix, CA</li>
        <li>Work I performed presented by mentors in Austin (TX), Austria and South Korea</li>
      </ul>
	)
}

const ucdavis = {
	title: 'Undergraduate Research Assistant II - UC Davis',
	city: 'Davis, CA',
	date: 'October 2015 - June 2016',
	content: (
              <ul>
              	<li>Prepare particle suspensions, measured their conductivities and pH</li>
              	<li>Used confocal microscope to study height bifurcation of colloids in basic solution when subject to AC electric fields</li>  
              </ul>
            )
}

export default [fictiv, llnl, ucdavis]