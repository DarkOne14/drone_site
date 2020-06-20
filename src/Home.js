import React from 'react';
import './Home.css';
// import { ImageBackground, Text } from 'react-native';
// import bigpic from '/images/golf1_resized.jpg';

function Home(){

    function blah(e) {
        e.target.css('font-size: 5px');
    }
    return(
        <div>
            <div class="imageTextBox">
                <img src='/images/golf1_resized.jpg' class="zoom" alt="drone golf view" />
                <div id="bannerText">Higher Resolution LLC</div>
                
            </div>
            <h1>Unrivaled photos</h1>
            


        </div>
    );
}

export default Home;