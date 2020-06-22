import React from 'react';
import './Gallery.css';


const videoSources = [
    "https://www.youtube.com/embed/H_jXChnWJwk",
    "https://www.youtube.com/embed/rUAfeoFDSgs",
    "https://www.youtube.com/embed/9FoKC_n_oxc",
    "https://www.youtube.com/embed/8UJaDlDUgGo",
    "https://www.youtube.com/embed/eB8IiGM2InE" 
];


function generateVGallery() {

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

function VideoGallery() {
    return (
        generateVGallery()
    );
}

export default VideoGallery;