import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import navigationConstants from '../staticData/navigationConstants'
import { NAV_COLOR, NAV_HOVER_COLOR } from './App'

const {
  CAREER_PROFILE,
  WORK_EXPERIENCE,
  EDUCATION,
  PROJECTS
} = navigationConstants

const StyledMenuItem = withStyles(theme => ({
  root: {
    color: 'white',
    background: NAV_COLOR,
    '&:focus': {
      backgroundColor: NAV_COLOR,
    },
    '&:hover':{
      backgroundColor: NAV_HOVER_COLOR,
    }
  },
}))(MenuItem)

const StyledMenu = withStyles(theme => ({
  paper: {
    background: NAV_COLOR,
  },
}))(Menu)

const StyledButton = withStyles(theme => ({
  root: {
    '&:hover':{
      backgroundColor: NAV_HOVER_COLOR,
    },
    color: "white"
  }
}))(Button)

class CustomMenu extends React.Component {
  state = {
    anchorEl: null,
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = (itemClicked) => {
    this.setState({ anchorEl: null })
    this.props.onMenuClick(itemClicked)
  }

  render() {
    const { anchorEl } = this.state

    return (
      <div>
        <StyledButton
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
          color={this.props.color}
        >
          Navigation
        </StyledButton>
        <StyledMenu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          disableScrollLock={true}
        >
          <StyledMenuItem onClick={() => this.handleClose(CAREER_PROFILE)}>Career Profile</StyledMenuItem>
          <StyledMenuItem onClick={() => this.handleClose(WORK_EXPERIENCE)}>Work Experience</StyledMenuItem>
          <StyledMenuItem onClick={() => this.handleClose(EDUCATION)}>Education</StyledMenuItem>
          <StyledMenuItem onClick={() => this.handleClose(PROJECTS)}>Projects</StyledMenuItem>
        </StyledMenu>
      </div>
    )
  }
}

export default CustomMenu
