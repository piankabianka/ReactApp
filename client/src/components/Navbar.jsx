import React from 'react'
import {Link, NavLink} from 'react-router-dom'


const Navbar=()=>{

    

    return (
        <nav className="nav-wrapper blue darken-3">
            <div className="nav-container container">
                <h5 className="left">TvSeries App</h5>
                <ul className="right">
                    <li><Link to="/">My list</Link></li>
                    <li><NavLink to="/add">Add new</NavLink></li>
                    <li><NavLink to="/login">User</NavLink></li>
                    
                </ul>
            </div>
        </nav>
    )
}

export default Navbar