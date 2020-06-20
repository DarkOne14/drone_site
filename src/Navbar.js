import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';



function NavBar() {

    const [selected, setSelected] = useState('Home');

    return (
        // removed sticky-top 
        <nav class="navbar navbar-fixed-top navbar-expand-sm" >
            <a class="navbar-brand">
                <Link to="/"><img src="/HigherResolutionLogo.png" id="logo" onClick={() => setSelected('Home')}></img></Link>
            </a>
            <ul class="navbar-nav ml-auto">
                <li className={"nav-item " + (selected == 'Home' ? 'active' : '')}><a onClick={() => setSelected('Home')}><Link to="/">Home</Link></a></li>
                <li class="dropdown">
                    <a href="#" data-toggle="dropdown" class="dropdown-toggle">Gallery<b class="caret"></b></a>
                    <ul class="dropdown-menu">
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    </ul>
                </li>
                <li class={"nav-item " + (selected == 'Gallery' ? 'active' : '')}><a onClick={() => setSelected('Gallery')}><Link to="/gallery">Gallery</Link></a></li>
                <li class={"nav-item " + (selected == 'WhatWeDo' ? 'active' : '')}><a onClick={() => setSelected('WhatWeDo')}><Link to="/what-we-do">What We Do</Link></a></li>
                <li class={"nav-item " + (selected == 'Contact' ? 'active' : '')}><a onClick={() => setSelected('Contact')}><Link to="/contact">Contact Us</Link></a></li>
            </ul> 
                 
        </nav>
    );
}

export default NavBar;