import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



export default class LoggedOut extends Component {
    render() {
        return (
            <>

                <NavLink to="/register" className="nav-item nav-link mr-2"><i className="fas fa-sign-in-alt"></i> | Sign up</NavLink>
                <NavLink to="/signin" className="nav-item nav-link ml-1 mr-2"><i className="far fa-user"></i> | Login</NavLink>


            </>
        )
    }
}

