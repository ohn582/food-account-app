import React, { Component } from 'react'
import '../../App.css'


export default class SwitchBtn extends Component {

    state = {
        isActive: true
    }
    handleState = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    render() {

        return (
            <div className="container" >
                <div onClick={
                    () => {
                        this.handleState() ?
                            document.body.style.background = "rgba(37, 40, 41, 0.589)" :
                            document.body.style.background = "white"
                    }
                } >
                    <span className="switch" > <i className="fas fa-plug" > </i></span >
                </div>
            </div>
        )
    }
}