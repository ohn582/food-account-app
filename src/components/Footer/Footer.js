import React, { Component } from 'react';
import FooterBar from './FooterBar';
import '../../App.css'





export default class Footer extends Component {


    render() {
        const colorWillChange = this.props.colorize
        return (

            <div >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={colorWillChange} fillOpacity="1" d="M0,64L120,90.7C240,117,480,171,720,181.3C960,192,1200,160,1320,144L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={colorWillChange} fillOpacity="1" d="M0,288L1440,128L1440,320L0,320Z"></path></svg>
                    <path fill="#32383E" fillOpacity="1" d="M0,32L80,64C160,96,320,160,480,192C640,224,800,224,960,197.3C1120,171,1280,117,1360,90.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
                    </path></svg>
                <FooterBar />
            </div>
        )
    }
}