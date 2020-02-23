import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'
import IconButton from '@material-ui/core/IconButton'
import { NAV_HOVER_COLOR } from './App'

const StyledIconButton = withStyles(theme => ({
    root: {
        '&:hover':{
            backgroundColor: NAV_HOVER_COLOR,
        },
        marginLeft: 15
    }
}))(IconButton)

type PropsType = {
    link: string
    svgPath: string
}

const CustomIconButton = (props: PropsType) => (
    <StyledIconButton onClick={() => window.open(props.link, "_blank")}>
        <SvgIcon style={{ color: 'white'}}>
            <path d={props.svgPath}/>
        </SvgIcon>
    </StyledIconButton>
)

export default CustomIconButton