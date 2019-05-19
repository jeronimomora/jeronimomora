import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import navigationConstants from '../fixtures/navigationConstants'
import SimpleMenu from './SimpleMenu'

const NavBar = (props) => {
    return(
        <div>
	        <AppBar position="fixed" style={{ background: '#16a99b', boxShadow: 'none'}}>
		            <Toolbar style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
		                <Typography variant="title" color="inherit">
		                	Jeronimo Mora
		                </Typography>
		                {
		                	props.isMobile ? <SimpleMenu onMenuClick={props.onMenuClick} color="inherit"/> : 
		                	<div>
				                <Button color='inherit' onClick={() => props.onMenuClick(navigationConstants.CAREER_PROFILE)}>
				                	Career Profile
				                </Button>
				                <Button color='inherit' onClick={() => props.onMenuClick(navigationConstants.WORK_EXPERIENCE)}>
				                	Work Experience
				                </Button>
				                <Button color='inherit' onClick={() => props.onMenuClick(navigationConstants.EDUCATION)}>
				                	Education
				                </Button>
				                <Button color='inherit' onClick={() => props.onMenuClick(navigationConstants.PROJECTS)}>
				                	Projects
				                </Button>
			                </div>
		           		}
		            </Toolbar>
	        </AppBar>
        </div>
    )
}
export default NavBar;