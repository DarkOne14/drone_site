import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Gallery from './Gallery';
import Contact from './Contact';
import WhatWeDo from './WhatWeDo';
import Navbar from './Navbar';
import Footer from './Footer';
import ImageGallery from './ImageGallery';
import VideoGallery from './VideoGallery';
import {Route, Link, Redirect} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Route exact path="/" component={Home} />
        {/* <Route exact path={'gallery'} component={Gallery} /> */}
        <Route exact path="/what-we-do" component={WhatWeDo} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/photos" component={ImageGallery} />
        <Route exact path="/videos" component={VideoGallery} />
        <Footer />
      </Router>
      
    </div>
  );
}


export default App;
