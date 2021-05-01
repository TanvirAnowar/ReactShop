import React from 'react'
import {InfoContext} from './infoContext'

const Home = () => {
    const {infoContextValue , setInfoContextValue} = React.useContext(InfoContext);
    console.log('home--',infoContextValue);
    return (
        <div>
            Home - {infoContextValue}
            <button onClick={()=>{setInfoContextValue('value changed')}}>change</button>
        </div>
    )
}

export default Home