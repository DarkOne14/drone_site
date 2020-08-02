import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import Content from './Content.js';
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';
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

// NOTE: mobile images should be compressed bc they don't need to that good.

const options = {
    settings: {
        lightboxTransitionSpeed: 0.2,
        lightboxTransitionTimingFunction: "easeIn",
    },
    buttons: {
        showDownloadButton: false,
    },
    thumbnails: {
        showThumbnails: true,
    }
}

function generateIGallery() {
    let rows = [];
    let content = [];
    for (var i = 0; i < imageSources.length; i++) {
        content.push(
            <div class="col-md-4 imageColumn">
                <img src={process.env.PUBLIC_URL + imageSources[i]} id={i} class="img-fluid w-100 galleryImage"/>
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
            <SimpleReactLightbox>
                <div class="container">
                    <div class="row">       
                        <div class="col-sm-6 my-auto" id="cam">
                            12MP Camera
                        </div>
                        {/* <div class="col-md-4 my-autos" id="des">
                            Our company works to produce professional level aerial imaging,
                                which is why our drones are equipped with a 12MP
                                camera and 4K video capabilities to highlight in every pixel.
                        </div> */}
                        <div class="col-sm-6 my-auto" id="vid">
                            4K Video
                        </div>
                    </div>
                </div>
                <SRLWrapper options={options}>
                    {generateIGallery()}
                </SRLWrapper>
                {/* {generateIGallery()} */}
                
            </SimpleReactLightbox>
        </div>       
    )
}

export default ImageGallery;