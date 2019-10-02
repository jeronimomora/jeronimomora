import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import SimpleMenu from './SimpleMenu'
import CustomIconButton from './CustomIconButton'
import linkedInSvgPath from '../staticData/linkedInSvgPath'
import githubSvgPath from '../staticData/githubSvgPath'

import { NAV_COLOR } from './App'

const NavBar = (props) => {
    return(
        <div>
	        <AppBar position="fixed" style={{ background: NAV_COLOR, boxShadow: 'none'}}>
				<Toolbar style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
					<div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
						<Typography variant="h6" color="inherit">
							{ props.isCompact ? "Jeronimo" : "Jeronimo Mora" }
						</Typography>
						<CustomIconButton
							link={"https://linkedin.com/in/jeronimomora"}
							svgPath={linkedInSvgPath}
						/>
						<CustomIconButton
							link={"https://github.com/jeronimomora"}
							svgPath={githubSvgPath}
						/>
					</div>
					<SimpleMenu onMenuClick={props.onMenuClick} color="inherit"/>
				</Toolbar>
	        </AppBar>
        </div>
    )
}
export default NavBar;