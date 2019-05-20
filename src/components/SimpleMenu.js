import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import navigationConstants from '../fixtures/navigationConstants'

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (itemClicked) => {
    this.setState({ anchorEl: null });
    this.props.onMenuClick(itemClicked)
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
          color={this.props.color}
        >
          Navigation
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={() => this.handleClose(navigationConstants.CAREER_PROFILE)}>Career Profile</MenuItem>
          <MenuItem onClick={() => this.handleClose(navigationConstants.WORK_EXPERIENCE)}>Work Experience</MenuItem>
          <MenuItem onClick={() => this.handleClose(navigationConstants.EDUCATION)}>Education</MenuItem>
          <MenuItem onClick={() => this.handleClose(navigationConstants.PROJECTS)}>Projects</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;
