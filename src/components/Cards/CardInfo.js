import React, { Component } from 'react';
import HeaderSmart from '../Header/HeaderSmart';
import Footer from '../Footer/Footer';



export default class CardInfo extends Component {
    state = {
        color: "#ff1493"
    }

    render() {
        return (
            <div>
                <HeaderSmart />
                <div className="container py-4">
                    <div style={{ backgroundColor: "white" }}>
                        <div className="d-flex justify-content-center align-items-center h-25">
                            <div className="col-sm-8  d-inline-block">
                                <div className="card mb-3 mt-4">
                                    <div className="card-body">
                                        <h3 className="card-title text-danger font-weight-bold">{this.props.name}</h3>
                                        <h5 className="card-title text-info font-weight-bold">${this.props.price}</h5>
                                        <p className="card-text">{this.props.description}</p><br />
                                        <img src={this.props.image} className="card-img-top img-fluid" alt="xyz" />
                                        <p className="card-text"></p>
                                        <button type="button" className="btn btn-outline-dark btn-lg btn-block font-weight-bold">Proceed to Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer colorize={this.state.color} />
            </div>
        )
    }
}