import React from 'react'
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
            width: '100px',
            height: '100px'            
        }}
    >
        {paths.map(svgPath => <path d={svgPath} />)}
    </SvgIcon>)
}

export default (props) => (<div>
        {mySvgIcon([babelPath])}
        {mySvgIcon([cppPath])}
        {mySvgIcon(cssPathArray)}
        {mySvgIcon([dockerPath])}
        {mySvgIcon([htmlPath])}
        {mySvgIcon([jsPath])}
        {mySvgIcon([nodePath])}
        {mySvgIcon(pythonPathArray)}
        {mySvgIcon([postgresPath])}
        {mySvgIcon([reactPath])}
        {mySvgIcon([tsPath])}
    </div>)