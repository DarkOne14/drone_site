import React from 'react';
import { Slide } from 'react-slideshow-image';
import Popup from 'reactjs-popup';
import Content from './Content.js';
import './Gallery.css';

const imageSources = [
    '/images/AA4.jpg',
    '/images/AA5.jpg',
    '/images/AA6.jpg',
    '/images/north0.jpg',
    '/images/north1.jpg',
    '/images/north2.jpg',
    '/images/golf0.jpg',
    '/images/golf1.jpg',
    '/images/golfclub0.jpg',
    '/images/AA0.jpg',
    '/images/AA1.jpg',
    '/images/AA2.jpg',
    '/images/beach0.jpg',
    '/images/cactus0.jpg',
    '/images/house0.jpg',
    '/images/house1.jpg',
    '/images/AA3.jpg',
];

var drew_index = 0;

function doSomething(e) {
    console.log("Something was done to pic id " + e.target.id);
    drew_index = e.target.id;
    console.log("drew index is now " + drew_index);
    // this.slideRef.goTo(drew_index);
}

function setIndex(e) {
    drew_index = e.target.id;
    console.log("i am making the index " + e.target.id);
}

let properties = {
    // duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    autoplay: false,
    defaultIndex: {drew_index},
    // defaultIndex: drew_index,
    // defaultIndex: newIndex,
    
    onChange: (oldIndex, newIndex) => {
        console.log('slide transition from ' + oldIndex + ' to ' + newIndex);
        // drew_index = newIndex;
        console.log('drew index after transition is now ' + drew_index);

    }
}

function Slideshow() {

    let content = [];
    for (var i = 0; i < imageSources.length; i++) {
        content.push(
            <div className="each-slide">
                <div style={{ backgroundImage: `url(${imageSources[i]})`}} />
          </div>
        );
    }
    return (
        <div className="slide-container">
            <Slide {...properties} defaultIndex={drew_index}>
                {content}
            </Slide>
        </div>
    );
}


function generateIGallery() {
    let rows = [];
    let content = [];
    for (var i = 0; i < imageSources.length; i++) {
        content.push(
            <div class="col-md-4">
                <img src={imageSources[i]} id={i} class="img-fluid w-100 galleryImage" onClick={e => doSomething(e)}/>
            </div>
        );
        if (content.length === 3) {
            rows.push(<div class="row">{content}</div>);
            content = [];
        }   
    }
    if (content.length !== 0) {
        rows.push(<div class="row" style={{justifyContent: "center"}}>{content}</div>);
    }

    return (
        <div class="container-fluid">
            {rows}
        </div>
    );
}

function ImageGallery() {
    return (
        <div>
            <h1>Photo Gallery</h1>
            <Popup modal trigger={generateIGallery()} onOpen={e => setIndex(e)}>
                {Slideshow()}
            </Popup>
            {/* <span>{generateIGallery()}</span> */}
        </div>
       
    )
}

export default ImageGallery;