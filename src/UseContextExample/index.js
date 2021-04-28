import React from 'react'
import Shop from './shop'
import About from './about'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'

const Index = () => {
    return (
        <>
            <Router>
                <div>                     
                    <Route path='/shop' component={Shop} />

                    <Route path='/about' component={About} />                    
                </div>
            </Router>
        </>
    )
}

export default Index
