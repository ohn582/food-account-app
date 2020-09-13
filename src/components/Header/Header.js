import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import CartLogo from './CartLogo'
import '../../App.css'
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';


export default class Header extends Component {

    render() {
        {/* console.log(localStorage.user) */ }
        const userStored = localStorage.user

        return (
            <div className=" py-4">

                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={{ outline: '0' }} >
                        <NavLink to="/home" style={{ textDecoration: "none" }}>
                            <span className="logo1"> &</span>
                            <span className="logo mr-4"> Shop</span>
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink className="nav-item nav-link " to="/home">Home</NavLink>
                                <NavLink className="nav-item nav-link" to="/admin">Admin</NavLink>
                            </div>
                            <div className="navbar-nav ml-auto" >
                                <CartLogo cart={this.props.cart} />
                                {userStored ? <LoggedIn /> : <LoggedOut />}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}