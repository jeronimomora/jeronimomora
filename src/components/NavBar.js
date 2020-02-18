import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CustomMenu from './CustomMenu'
import CustomIconButton from './CustomIconButton'
import linkedInSvgPath from '../staticData/svgPaths/linkedIn'
import githubSvgPath from '../staticData/svgPaths/github'
import '../styles/NavBar.css'

import { NAV_COLOR } from './App'

const StyledToolbar = withStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
}))(Toolbar)

const StyledAppBar = withStyles(theme => ({
	root: {
		background: NAV_COLOR,
		boxShadow: 'none'
	},
}))(AppBar)

const NavBar = (props) => {
    return(
		<StyledAppBar position="fixed">
			<StyledToolbar>
				<div className="personal-info">
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
				<CustomMenu onMenuClick={props.onMenuClick}/>
			</StyledToolbar>
		</StyledAppBar>
    )
}
export default NavBar