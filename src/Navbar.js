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
                <li class="nav-item dropdown">
                    <a href="#" data-toggle="dropdown" class={"dropdown-toggle " + (selected == 'Gallery' ? 'active' : '')}>Gallery<b class="caret"></b></a>
                    <ul class="dropdown-content">
                        <a href="#" onClick={() => setSelected('Gallery')}><Link to="/photos">Photos</Link></a>
                        <a href="#" onClick={() => setSelected('Gallery')}><Link to="/videos">Videos</Link></a>
                    </ul>
                </li>
                {/* <li class={"nav-item " + (selected == 'Gallery' ? 'active' : '')}><a onClick={() => setSelected('Gallery')}><Link to="/gallery">Gallery</Link></a></li> */}
                <li class={"nav-item " + (selected == 'WhatWeDo' ? 'active' : '')}><a onClick={() => setSelected('WhatWeDo')}><Link to="/what-we-do">What We Do</Link></a></li>
                <li class={"nav-item " + (selected == 'Contact' ? 'active' : '')}><a onClick={() => setSelected('Contact')}><Link to="/contact">Contact Us</Link></a></li>
            </ul> 
                 
        </nav>
    );
}

export default NavBar;