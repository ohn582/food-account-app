import React, { Component } from 'react';
import SwitchBtn from '../Header/SwitchBtn';


import '../../App.css'


export default class FooterBar extends Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <SwitchBtn />
                    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="fa fa-facebook">{}</a>
                    <a href="https://instagram.com/" rel="noopener noreferrer" target="_blank" className="fa fa-instagram">{}</a>
                    <a href="https://youtube.com/" rel="noopener noreferrer" target="_blank" className="fa fa-youtube">{}</a>
                    <a href="https://twitter.com/" rel="noopener noreferrer" target="_blank" className="fa fa-twitter">{}</a>
                    <a href="https://foursquare.com/" rel="noopener noreferrer" target="_blank" className="fa fa-foursquare">{}</a>
                    <a href="https://linkedin.com/" rel="noopener noreferrer" target="_blank" className="fa fa-linkedin">{}</a>
                    <a href="https://yahoo.com/" rel="noopener noreferrer" target="_blank" className="fa fa-yahoo">{}</a>
                    <a href="https://reddit.com/" rel="noopener noreferrer" target="_blank" className="fa fa-reddit">{}</a><br /><br />
                </div>
                <h3 className='quote'>Made by J.Farah <span title="Made with Love by J.Farah">All rights reserved | 2019</span></h3>
            </div>
        )
    }
}
