import React from 'react'
import About from './about'
import Home from './home'
import Navigation from './navigation'

import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'

const Index = () => {
    return (
        <>
            <Router>
                <Navigation />

                <Switch>                                   

                    <Route path='/about' exact component={About} />        
                    <Route path='/home' exact component={Home} />        

                             
                </Switch>
            </Router>
        </>
    )
}

export default Index
