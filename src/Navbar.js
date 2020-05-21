import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';



function NavBar() {

    const [selected, setSelected] = useState('Home');

    return (
        <nav class="navbar sticky-top navbar-expand-sm" >
            <a class="navbar-brand">
                <img src="/HigherResolutionLogo.png" id="logo"/>
            </a>
            <ul class="navbar-nav ml-auto">
                <li className={"nav-item " + (selected == 'Home' ? 'active' : '')}><a onClick={() => setSelected('Home')}><Link to="/">Home</Link></a></li>
                <li class={"nav-item " + (selected == 'Gallery' ? 'active' : '')}><a onClick={() => setSelected('Gallery')}><Link to="/gallery">Gallery</Link></a></li>
                <li class={"nav-item " + (selected == 'WhatWeDo' ? 'active' : '')}><a onClick={() => setSelected('WhatWeDo')}><Link to="/what-we-do">What We Do</Link></a></li>
                <li class={"nav-item " + (selected == 'Contact' ? 'active' : '')}><a onClick={() => setSelected('Contact')}><Link to="/contact">Contact Us</Link></a></li>
            </ul> 
                 
        </nav>
    );
}

export default NavBar;