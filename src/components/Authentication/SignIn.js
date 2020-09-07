
import React, { Component } from 'react'
import Header from '../Header/Header';


export default class SignIn extends Component {

    state = {
        username: "",
        password: ""
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);

        fetch(`http://13.58.204.144:3001/users/login`, {
            method: 'POST',
            headers: {
                "Authorization": "token_go",
                'content-type': 'application/json',
                'accept': 'application/json'

            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
            .then(res => res.json())
            .then(response => console.log(response) || this.props.setUser(response.user, response.token))


    }


    render() {
        return (
            <div className="py-2 mb-2">
                <Header cart={this.props.cart} />
                <div className="d-flex justify-content-center align-items-center">

                    <div className="col-sm-8">
                        <div className="containercard mb-3 mt-4">
                            <div className="container text-center  mt-4">
                                <form className="form-signin" onSubmit={this.handleSubmit}>
                                    <div className="losange">
                                        <div className="los1">
                                            <img className="mb-4" src="https://cdn.dribbble.com/users/89373/screenshots/4937800/dribbble_padlock_shot.gif" alt="register" />
                                        </div>
                                    </div>
                                    <h1 className="h3 mb-3 font-weight-normal pink-text">Please sign in</h1>
                                    <label htmlFor="inputEmail" className="sr-only">Username</label>
                                    <input type="text" name="username" id="inputEmail" className="form-control" placeholder="Username" required="" autoFocus="" onChange={this.handleChange} />
                                    <br />
                                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                                    <input type="password" name="password" id="inputPassword" className="form-control" placeholder="Password" required="" onChange={this.handleChange} />
                                    <div className="checkbox mb-3">
                                    </div>
                                    <button className="btn btn-lg btn-block buttons-color" type="submit">Sign in</button>
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