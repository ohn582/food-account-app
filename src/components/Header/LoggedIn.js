definitions or references in the same repository.Learn more

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



export default class LoggedIn extends Component {

    clearLocalStorage = () => {
        window.localStorage.clear()
    }

    render() {
        const userStored = localStorage.user
        return (
            <>
                <NavLink to="/home" className="nav-item nav-link mr-2"><i className="fas fa-sign-in-alt"></i> | Welcome {userStored}</NavLink>
                <NavLink to="/signin" className="nav-item nav-link ml-1 mr-2" onClick={this.clearLocalStorage}><i className="far fa-user"></i> | Logout</NavLink>
            </>
        )
    }
}