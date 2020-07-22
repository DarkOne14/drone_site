import React, { useState } from 'react';
import globalHook from 'use-global-hook';
import {Link} from 'react-router-dom';
import './Navbar.css';


// const [selected, setSelected] = useState('Home');
const initialState = {
    currentPage: 'Home',
    currentBg: 'none',
    currentPos: 'absolute',
};

const actions = {
    setPage: (store, input) => {
        store.setState({ currentPage: input });
    },
    setBg: (store, inputBg) => {
        store.setState({ currentBg: inputBg });
    },
    setPos: (store, inputPos) => {
        store.setState({ currentPos: inputPos });
    }
};

const useGlobal = globalHook(React, initialState, actions);

function NavBar() {

    const [pageState, pageActions] = useGlobal();

    return (
        // removed sticky-top , nabbar-fixed-top
        <nav class="navbar navbar-expand-md" style={{background: pageState.currentBg, position: pageState.currentPos}}>
            <a class="navbar-brand">
                <Link to="/"><img src="/HigherResolutionLogo.png" id="logo" onClick={() => {pageActions.setPage('Home'); pageActions.setBg('none'); pageActions.setPos('absolute');} }></img></Link>
            </a>
            
            <ul class="navbar-nav ml-auto">
                <li className={"nav-item " + (pageState.currentPage == 'Home' ? 'active' : '')}><a onClick={() => {pageActions.setPage('Home'); pageActions.setBg('none'); pageActions.setPos('absolute');} }><Link to="/">Home</Link></a></li>
                <li class={"nav-item dropdown " }>
                    <a href="#" data-toggle="dropdown" class="dropdown-toggle" id={(pageState.currentPage == 'Gallery' ? 'active-toggle' : '')}>Gallery<b class="caret"></b></a>
                    <ul class="dropdown-content">
                        <a href="#" onClick={() => {pageActions.setPage('Gallery'); pageActions.setBg('rgb(0,102,204'); pageActions.setPos('relative') } }><Link to="/photos">Photos</Link></a>
                        <a href="#" onClick={() => {pageActions.setPage('Gallery'); pageActions.setBg('rgb(0,102,204'); pageActions.setPos('relative') } }><Link to="/videos">Videos</Link></a>
                    </ul>
                </li>
                <li class={"nav-item " + (pageState.currentPage == 'WhatWeDo' ? 'active' : '')}><a onClick={() => {pageActions.setPage('WhatWeDo'); pageActions.setBg('none'); pageActions.setPos('absolute') } }><Link to="/what-we-do">What We Do</Link></a></li>
                <li class={"nav-item " + (pageState.currentPage == 'Contact' ? 'active' : '')}><a onClick={() => {pageActions.setPage('Contact'); pageActions.setBg('none'); pageActions.setPos('absolute') } }><Link to="/contact">Contact Us</Link></a></li>
            </ul>
           
            
                 
        </nav>
    );
}

export default NavBar;