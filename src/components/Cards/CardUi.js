import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css';


export default class CardUi extends Component {

    state = {
        btn: 'Add to cart'
    }

    handleClick = () => {
        this.props.addToCart(this.props.product)
        this.setState({ btn: "Successfully Added" })
    }

    render() {
        return (

            <div className="col-sm-4 py-2 px-2">
                <div className="card card-body h-100 mt-4">
                    <NavLink to={"/item/" + this.props.id}>
                        <img src={this.props.image} className="card-img-top" alt="169824162" />     {/* Image */}
                    </NavLink>
                    <div className="card-body">
                        <h5 className="card-title text-dark ">{this.props.name} {}                 {/* Name */}
                            <span className="badge badge-warning">New</span>
                        </h5>
                        <h5 className="card-title text-info">${this.props.price}</h5>              {/* Price */}
                        <p className="card-text">{this.props.description}</p>                      {/* Descr */}
                    </div>

                    <div>
                        {this.state.btn === "Successfully Added" ?
                            <div className="alert alert-info alert-dismissible fade show" role="alert">
                                <strong> "{this.props.name}" Is Successfully Added To Your Cart!</strong> You can add more of this item once you checkout.
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            : null}
                        <button type="button" className="btn  btn-lg btn-block font-weight-bold buttons-color"
                            onClick={this.handleClick}>{this.state.btn}</button>
                    </div>

                </div>
            </div>

        )
    }
}