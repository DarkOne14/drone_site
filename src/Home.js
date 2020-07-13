import React from 'react';
import './Home.css';
// import { ImageBackground, Text } from 'react-native';

function Home(){
    return(
        <div>
            <div class="imageTextBox">
                <img src='/images/golf1_resized.jpg' class="zoom" alt="drone golf view" />
                <div id="smallerText">Higher Resolution LLC</div>
                <div id="bannerText">Highest Quality Aerial Photography Done Your Way</div> 
            </div>
            <h1>Aerial Photography for You</h1>
            <div>
                <div>
                    <p>
                        Drones are making their impact on the world everyday.
                        Be a part of the changing community. Take your ideas and make them a reality with us.
                        The possibilities are endless.
                    </p>
                </div>
            </div>
            <hr/>
            <div class="middle">
                <div class="section">
                    <h1 class="largeText" style={{float: "left"}}>Your Project Done Your Way</h1>
                    <p>
                        If you are looking for your affordable solution to aerial photography, Higher Resolution LLC is your answer.
                        We've got experience in many different fields from real estate to beach coasts, golf courses to sporting events,
                        we can help you with whatever you need.
                        Check out what else we can do, and let us know what you're thinking.
                    </p>
                </div>
                <div class="section">
                    <h1 class="largeText" style={{float: "right"}}>The Highest Quality. The Lowest Prices.</h1>
                    <p>
                        The best and most relevant form of drone media today is professional high definition 4K video.
                        As you have likely seen and experienced, a professional looking video, when paired with the right music
                        and properly edited, can leave a lasting impression.
                        That is exactly what we aim to provide for each of our customers, working directly with them to determine
                        the best music, tone, and type of coverage to make the experience completely customizable and the best that it can be.
                    </p>
                </div>
                <div class="section">
                    <h1 class="largeText" style={{float: "left"}}>We Give You More For The Cost Of Less</h1>
                    <p>
                        That is why we offer a surplus of 12 MP photographs from each direction. Every ideal angle will be captured,
                        and each photo would give you and all those who view them a new and unique view unparalleled to any they have
                        ever seen before.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;