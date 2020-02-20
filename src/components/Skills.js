import React from 'react'
import Grid from '@material-ui/core/Grid'
import SvgIcon from '@material-ui/core/SvgIcon'
import babelPath from '../staticData/svgPaths/babel'
import cppPath from '../staticData/svgPaths/cpp'
import { cssPathArray } from '../staticData/svgPaths/css'
import dockerPath from '../staticData/svgPaths/docker'
import htmlPath from '../staticData/svgPaths/html'
import jsPath from '../staticData/svgPaths/javascript'
import nodePath from '../staticData/svgPaths/node'
import postgresPath from '../staticData/svgPaths/postgres'
import { pythonPathArray } from '../staticData/svgPaths/python'
import reactPath from '../staticData/svgPaths/react'
import tsPath from '../staticData/svgPaths/typescript'

const mySvgIcon = (paths) => {
    return (<SvgIcon
        viewBox='0 0 128 128'
        style={{
            color: 'white',
            width: '80px',
            height: '80px'
        }}
    >
        {paths.map((svgPath, index) => <path d={svgPath} key={index} />)}
    </SvgIcon>)
}

const gridItem = (pathArray) => {
    const xs = 4
    const sm = 3
    return (
        <Grid
            item
            xs={xs}
            sm={sm}
            style={{ marginBottom: '15px' }}>
            {mySvgIcon(pathArray)}
        </Grid>
    )
}

export default (props) => (
    <Grid
        container
        justify="space-between"
        style={{
            marginBottom: '15px',
            marginLeft: '30px',
            marginRight: '30px',
        }}
    >
        {gridItem([jsPath])}
        {gridItem([nodePath])}
        {gridItem([htmlPath])}
        {gridItem(cssPathArray)}
        {gridItem([tsPath])}
        {gridItem([reactPath])}
        {gridItem([babelPath])}
        {gridItem([postgresPath])}
        {gridItem([cppPath])}
        {gridItem([dockerPath])}
        {gridItem(pythonPathArray)}
    </Grid>
)