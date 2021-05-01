import React from 'react'
import {InfoContext} from './infoContext'

const Home = () => {
    const {infoContextValue , setInfoContextValue} = React.useContext(InfoContext);
    return (
        <div>
            Home - {infoContextValue}
        </div>
    )
}

export default Home