import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
                
        <nav>
            <ul>
                <Link to='/about'>
                <li>About</li>
                </Link>
                
                <Link to='/shop'>
                <li>Shop</li>
                </Link>
            </ul>
        </nav>
        
    )
}

export default Navigation
