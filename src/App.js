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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
      <Route exact path={process.env.PUBLIC_URL + "/gallery"} component={Gallery} />
      <Route exact path={process.env.PUBLIC_URL + "/what-we-do"} component={WhatWeDo} />
      <Route exact path={process.env.PUBLIC_URL + "/contact"} component={Contact} />
      <Route exact path={process.env.PUBLIC_URL + "/photos"} component={ImageGallery} />
      <Route exact path={process.env.PUBLIC_URL + "/videos"}component={VideoGallery} />
      <Footer />
    </div>
  );
}


export default App;
