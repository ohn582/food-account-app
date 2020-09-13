import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';


export default class CartLogo extends Component {
    render() {
        return (
            <div>
                <NavLink to="/cart" className="nav-item nav-link mr-2 cart">
                    <span className="cartCounter">{this.props.cart.length === 0 ? null : this.props.cart.length}</span>  <i className="fab fa-opencart"></i>
                </NavLink>
            </div>
        )
    }
}