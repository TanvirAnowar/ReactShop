import React from 'react'
import {InfoContext} from './infoContext'

const About = () => {
        const {infoContextValue , setInfoContextValue} = React.useContext(InfoContext);

    return (
        <div>
            About - {infoContextValue}
        </div>
    )
}

export default About