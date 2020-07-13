import React, {useState} from 'react';
import { Slide } from 'react-slideshow-image';
import Popup from 'reactjs-popup';
import Content from './Content.js';
import './Gallery.css';


const imageSources = [
    '/images/AA0.jpg',
    '/images/AA1.jpg',
    '/images/AA2.jpg',
    '/images/beach0.jpg',
    '/images/cactus0.jpg',
    '/images/golf0.jpg',
    '/images/golf1.jpg',
    '/images/golfclub0.jpg',
    '/images/house0.jpg',
    '/images/house1.jpg',
];

const videoSources = [
    "https://www.youtube.com/embed/H_jXChnWJwk",
    "https://www.youtube.com/embed/rUAfeoFDSgs",
    "https://www.youtube.com/embed/9FoKC_n_oxc",
    "https://www.youtube.com/embed/8UJaDlDUgGo",
    "https://www.youtube.com/embed/eB8IiGM2InE" 
];


const properties = {
    // duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    autoplay: false,
    
    onChange: (oldIndex, newIndex) => {
        console.log('slide transition from ' + oldIndex + ' to ' + newIndex);
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
            <Slide {...properties} defaultIndex={3}>
                {content}
            </Slide>
        </div>
    );


    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${imageSources[0]})`}}>
              {/* <span>Slide 1</span> */}
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${imageSources[1]})`}}>
              {/* <span>Slide 2</span> */}
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${imageSources[2]})`}}>
              {/* <span>Slide 3</span> */}
            </div>
          </div>
        </Slide>
      </div>
    );
}

function doSomething(e) {
    console.log("Something was done to pic id " + e.target.id);
}

function photoGallery() {
    let rows = [];
    let content = [];
    for (var i = 0; i < imageSources.length; i++) {
        content.push(
            <div class="col-md-4">
                <img src={imageSources[i]} id={i} class="img-fluid w-100" onClick={e => doSomething(e)}/>
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

    // return garbage();

    return (
        <div class="container-fluid">
            {rows}
        </div>
    );
}

function garbage() {

    

    return(
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-3">
                    <img src={imageSources[0]} />
                </div>
                <div class="col-sm-3">
                    <img src={imageSources[1]} />
                </div>
                <div class="col-sm-3">
                    <img src={imageSources[2]} />
                </div>
            </div>            
        </div>
    );
}



function videoGallery() {

    let rows = [];
    let content = [];
    for (var i = 0; i < videoSources.length; i++) {
        content.push(
            <div class="col-md-4">
                <iframe src={videoSources[i]} allowFullScreen frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" />
            </div>
        );
        if (content.length === 3) {
            rows.push(<div class="row">{content}</div>);
            content = [];
        }
    }
    if (content.length !== 0) {
        rows.push(<div class="row">{content}</div>);
    }

    return (
        <div class="container-fluid">
            {rows}
        </div>
    );
}


function Gallery(){

    const [content, setContent] = useState('photos');
    let stuff;
    if (content === 'photos') {
        stuff = photoGallery();
    }
    else {
        stuff = videoGallery();
    }

    return(        
        <div>
            <button className={'btn ' + (content === 'photos' ? "active": "")} id="photoBtn" onClick={() => setContent('photos')}>
                Photos
            </button>
            <button className={'btn ' + (content === 'videos' ? 'active' : '')} id="videoBtn" onClick={() => setContent('videos')}>
                Videos
            </button>
            {/* {stuff} */}
            <Popup modal trigger={stuff}>
                {Slideshow()}
            </Popup>
            {/* {Slideshow()} */}
        </div>
    );
}

export default Gallery;