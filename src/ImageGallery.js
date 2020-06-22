import React from 'react';
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

function doSomething(e) {
    console.log("Something was done to pic id " + e.target.id);
}


function generateIGallery() {
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

    return (
        <div class="container-fluid">
            {rows}
        </div>
    );
}

function ImageGallery() {
    return (
        generateIGallery()
    )
}

export default ImageGallery;