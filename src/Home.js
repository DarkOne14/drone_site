import React, { useState, useEffect } from 'react';
import './Home.css';
import globalHook from 'use-global-hook';
import CrossfadeImage from 'react-crossfade-image';


// import { ImageBackground, Text } from 'react-native';

const imageSources = [
    '/images/home_page/home0.jpg',
    '/images/home_page/home1.jpg',
    '/images/home_page/home2.jpg',
    '/images/home_page/home3.jpg',
    '/images/home_page/home4.jpg',
    '/images/home_page/home5.jpg',
];

// const initState = {
//     index: 0,
// };

// const actions = {
//     setIndex: (store, input) => {
//         store.setState({ index: (this.index + 1) % imageSources.length});
//     }
// };


// const useGlobal = globalHook(React, initState, actions);


// setInterval(() => {
//     // imageActions.setIndex();
//     temp = (temp + 1) % imageSources.length;
//     console.log(temp);
// }, 1000);

function Home(){

    const [index, setIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex(index => index + 1);
      }, 4000);
      return () => clearInterval(interval);
    }, []);

    // function swapPic() {
    //     setIndex((imageIndex+ 1) % imageSources.length);
    // }

    // setInterval(swapPic(), 1000);

    return(
        <div>
            
            <div class="imageTextBox">
                <CrossfadeImage src={imageSources[index%imageSources.length]} duration={4000} />    
                <div id="smallerText">Higher Resolution LLC</div>
                <div id="bannerText">Highest Quality<br /> Aerial Photography Done Your Way</div>   
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
                    <p class="paragraph">
                        If you are looking for your affordable solution to aerial photography, Higher Resolution LLC is your answer.
                        We've got experience in many different fields from real estate to beach coasts, golf courses to sporting events,
                        we can help you with whatever you need.
                        Check out what else we can do, and let us know what you're thinking.
                    </p>
                </div>
                <div class="section">
                    <h1 class="largeText" style={{float: "right"}}>The Highest Quality. The Lowest Prices.</h1>
                    <p class="paragraph">
                        The best and most relevant form of drone media today is professional high definition 4K video.
                        As you have likely seen and experienced, a professional looking video, when paired with the right music
                        and properly edited, can leave a lasting impression.
                        That is exactly what we aim to provide for each of our customers, working directly with them to determine
                        the best music, tone, and type of coverage to make the experience completely customizable and the best that it can be.
                    </p>
                </div>
                <div class="section">
                    <h1 class="largeText" style={{float: "left"}}>We Give You More For The Cost Of Less</h1>
                    <p class="paragraph">
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