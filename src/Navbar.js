import React, { useState, useEffect } from 'react';
import globalHook from 'use-global-hook';
import {Link} from 'react-router-dom';
import './Navbar.css';


// const [selected, setSelected] = useState('Home');
const initialState = {
    // currentPage: 'Home',
    currentBg: 'none',
    currentPos: 'absolute',
};

const actions = {
    // setPage: (store, input) => {
    //     store.setState({ currentPage: input });
    // },
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

    const initialPage = () => window.localStorage.getItem('activePage') || 'Home';
    const [activePage, setActivePage] = useState(initialPage);
    const [collapsed, setCollapsed] = useState(true);
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    // () => means we are declaring a function
    // [value] means this will only run when value re-renders
    useEffect(() => {
        window.localStorage.setItem('activePage', activePage);
        console.log(process.env.PUBLIC_URL);
    },[activePage]);

    function toggleNavbar() {
        if (collapsed) setCollapsed(false);
        else setCollapsed(true);
        console.log("sup");
    };

    return (
        
        <div >
            {/* removed sticky-top , nabbar-fixed-top, navbar-expand-md */}
            <nav class="navbar navbar-light navbar-expand-md" style={{background: (activePage == 'Gallery' ? 'rgb(0,102,204)' : 'none'), position: (activePage == 'Gallery' ? 'relative' : 'absolute')}}>
                <a class="navbar-brand" id="logoContainer">
                    <Link to="/"><img src={process.env.PUBLIC_URL + "/HigherResolutionLogo.png"} id="logo" onClick={() => {setActivePage('Home'); pageActions.setBg('none'); pageActions.setPos('absolute');} }></img></Link>  
                </a>
                {/* <button onClick={toggleNavbar} className={classTwo} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button> */}
                {/* <div className={classOne} id="navbarResponsive"> */}
                    <ul class="navbar-nav ml-auto">
                        <li id="home" className={"nav-item " + (activePage == 'Home' ? 'active' : '')}><a onClick={() => {setActivePage('Home'); pageActions.setBg('none'); pageActions.setPos('absolute');} }><Link to="/">Home</Link></a></li>
                        <li class="nav-item dropdown">
                            <a href="#" data-toggle="dropdown" class="dropdown-toggle" id={(activePage == 'Gallery' ? 'active-toggle' : '')}>Gallery<b class="caret"></b></a>
                            <ul class="dropdown-content">
                                <a id="photos" href="#" onClick={() => {setActivePage('Gallery'); pageActions.setBg('rgb(0,102,204'); pageActions.setPos('relative') } }><Link to="/photos">Photos</Link></a>
                                <a id="videos" href="#" onClick={() => {setActivePage('Gallery'); pageActions.setBg('rgb(0,102,204'); pageActions.setPos('relative') } }><Link to="/videos">Videos</Link></a>
                            </ul>
                        </li>
                        <li id="what-we-do" class={"nav-item " + (activePage == 'WhatWeDo' ? 'active' : '')}><a onClick={() => {setActivePage('WhatWeDo'); pageActions.setBg('none'); pageActions.setPos('absolute') } }><Link to="/what-we-do">What We Do</Link></a></li>
                        <li id="contact" class={"nav-item " + (activePage == 'Contact' ? 'active' : '')}><a onClick={() => {setActivePage('Contact'); pageActions.setBg('none'); pageActions.setPos('absolute') } }><Link to="/contact">Contact Us</Link></a></li>
                    </ul>
                {/* </div>    */}
                          
            </nav>

            {/* <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>    
                    </ul>
                </div>  
            </nav> */}
            
        </div>
        
    );
}

export default NavBar;