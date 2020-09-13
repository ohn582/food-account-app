import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import '../../App.css'


export default class HeaderAdmin extends Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <NavLink to="/home" style={{ textDecoration: "none" }}><span className="logo1">&</span><span className="logo mr-4"> Shop</span></NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {/* <NavLink className="nav-item nav-link " to="/home">Home</NavLink> */}
                            <NavLink className="nav-item nav-link" to="/admin">Create</NavLink>
                            <NavLink className="nav-item nav-link" to="/delete">Delete</NavLink>
                            <NavLink className="nav-item nav-link" to="/update">Update</NavLink>
                        </div>
                        <div className="navbar-nav ml-auto" >
                            {/* <NavLink to="/home" className="nav-item nav-link mr-2 cart"><i className="fab fa-opencart"></i></NavLink> */}
                            <NavLink to="/register" className="nav-item nav-link mr-2"><i className="fas fa-sign-in-alt"></i> | Sign up</NavLink>
                            <NavLink to="/signin" className="nav-item nav-link ml-1 mr-2"><i className="far fa-user"></i> | Login</NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}