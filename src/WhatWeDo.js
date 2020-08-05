import React from 'react'

import './SimplePage.css'

function WhatWeDo() {
    return(
        <div>
            <div class="topPhoto">
                <img id="what" src={process.env.PUBLIC_URL + "/images/boat1.jpg"} />
                <div id="photoText">What We Do</div>
            </div>
            <div class="container">
                <div class="wwd">
                    <h1>What we do</h1>
                    <div class="row">
                        <div class="col-sm-12">
                        Higher Resolution LLC is your most affordable and professional solution to all of your aerial imaging needs.
                        We use the newest technology to capture what you want and the way you want it, all from a stunning new angle.
                        Our FAA licensed pilots work with you to deliver the best quality images and videos tailored to your desires.
                        Let us know what you're thinking and how we can help you get to the next level.
                        </div>
                    </div>
                </div>
                <hr/>
                <div class="services">
                    <h1>Services</h1>
                    <br/>
                        <div class="row justify-content-sm-center">
                            <div class="col-sm-12">
                                <ul style={{columnCount:2}}>
                                    <li>Weddings</li>
                                    <li>Boats</li>
                                    <li>Landscapes</li>
                                    <li>Sporting Events</li>
                                    <li>Resorts & Hotels</li>
                                    <li>Concerts</li>
                                    <li>Campus Coverage</li>
                                    <li>Personal Projects</li>
                                    <li>Large Groups</li>
                                    <li>Golf Courses</li>
                                    <li>Real Estate Imaging</li>
                                    <li>Car Dealerships</li>
                                    <li>Surveying</li>
                                    <li>Construction Site Inspection</li>
                                    <li>Parties</li>
                                    <li>Damage Claim Assistance</li>
                                    <li>Nurseries</li>
                                    <li>AND MORE</li>
                                </ul>
                            </div>      
                            
                                                      
                            <i>Have an idea you don't see on here? Not a problem. Just reach out and tell us about it.</i>
                        </div>
                </div>
            </div>         
        </div>
    );
}

export default WhatWeDo;