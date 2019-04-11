import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = (props) => {
    return(
        <div>
	        <AppBar position="fixed" style={{ background: '#16a99b', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
	            <Toolbar>
	                <Typography variant="title" color="inherit">
	                	Jeronimo Mora
	                </Typography>
	                <Button color='inherit' onClick={() => props.onMenuClick('CAREER_PROFILE')}>
	                	Career Profile
	                </Button>
	                <Button color='inherit' onClick={() => props.onMenuClick('WORK_EXPERIENCE')}>
	                	Work Experience
	                </Button>
	                <Button color='inherit' onClick={() => props.onMenuClick('EDUCATION')}>
	                	Education
	                </Button>
	                <Button color='inherit' onClick={() => props.onMenuClick('PROJECTS')}>
	                	Projects
	                </Button>
	            </Toolbar>
	        </AppBar>
        </div>
    )
}
export default NavBar;