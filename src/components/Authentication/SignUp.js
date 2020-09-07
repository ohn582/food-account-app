import React, { Component } from 'react';
import Header from '../Header/Header';


export default class SignUp extends Component {
    render() {
        return (
            <div className="py-1 mt-2">
                <Header cart={this.props.cart} />

                <div className="d-flex justify-content-center align-items-center ">

                    <div className="col-sm-8">
                        <div className="containercard mb-3 mt-4">
                            <div className="container text-center  mt-4">

                                <form className="form-signin">

                                    <div className="losange">
                                        <div className="los1">
                                            <img className="mb-2 mt-8" src="https://data.whicdn.com/images/293246292/original.gif" alt="signin" style={{ width: "20rem", height: "15rem" }} />
                                        </div>
                                    </div>
                                    <h1 className="h3 mb-3 font-weight-normal pink-text">Please sign up</h1>

                                    {/* ===================================================== #1st Input: */}
                                    <label htmlFor="inputEmail" className="sr-only">Username</label>
                                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" />
                                    <br />


                                    {/* ===================================================== #2nd Input: */}

                                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
                                    <br />



                                    {/* ===================================================== #3rd Input: */}

                                    <label htmlFor="inputPassword" className="sr-only">ConfirmPassword</label>
                                    <input type="password" id="inputPassword" className="form-control" placeholder="Confirm Password" required="" />
                                    <div className="checkbox mb-3">
                                    </div>
                                    <button className="btn btn-lg btn-block buttons-color" type="submit">Sign up</button>
                                    <p className="mt-5 mb-3" style={{ color: "#C8C8C8" }}>© 2019-2020</p>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}