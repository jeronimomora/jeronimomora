import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import navigationConstants, {
  NavigationConstantType,
} from "../staticData/navigationConstants";
import { NAV_COLOR, NAV_HOVER_COLOR } from "./NavBar";

const {
  CAREER_PROFILE,
  SKILLS,
  WORK_EXPERIENCE,
  EDUCATION,
} = navigationConstants;

const StyledMenuItem = withStyles((theme) => ({
  root: {
    color: "white",
    background: NAV_COLOR,
    "&:focus": {
      backgroundColor: NAV_COLOR,
    },
    "&:hover": {
      backgroundColor: NAV_HOVER_COLOR,
    },
  },
}))(MenuItem);

const StyledMenu = withStyles((theme) => ({
  paper: {
    background: NAV_COLOR,
  },
}))(Menu);

const StyledButton = withStyles((theme) => ({
  root: {
    "&:hover": {
      backgroundColor: NAV_HOVER_COLOR,
    },
    color: "white",
  },
}))(Button);

type PropsType = {
  onMenuClick: (itemClicked: NavigationConstantType) => void;
};

const CustomMenu = (props: PropsType) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (itemClicked: NavigationConstantType) => {
    setAnchorEl(null);
    props.onMenuClick(itemClicked);
  };

  return (
    <div>
      <StyledButton
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        Navigation
      </StyledButton>
      <StyledMenu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        disableScrollLock={true}
      >
        <StyledMenuItem onClick={() => handleClose(CAREER_PROFILE)}>
          Top
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleClose(SKILLS)}>
          Skills
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleClose(WORK_EXPERIENCE)}>
          Work Experience
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleClose(EDUCATION)}>
          Education
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
};

export default CustomMenu;
