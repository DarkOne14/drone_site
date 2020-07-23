import React from 'react'

import './SimplePage.css';
import './Contact.css'

function Contact(){
    return(
        <div>
            <div class="topPhoto">
                <img src="/images/AA7.jpg" />
                <div id="photoText">Contact Us</div>
            </div>
            <div class="container" id="contact-container">
                <div class="row">
                    <div class="col-md-4">
                        <img src="/images/portrait.jpeg" id="selfPortrait" />
                    </div>
                    <div class="col-md-8 my-auto" id="info">
                        <p>Looking for a quote?<br />
                        Want to see more of our work?<br />
                        Have any questions?</p>
                        <p>Reach out to us and we will get right back to you!</p>
                        <hr class="halfWidth" />
                        <p><b>owner: </b>Drew Hirselj</p>
                        <p><b>email: </b><a href="mailto:eyeintheskydh@gmail.com">eyeintheskydh@gmail.com</a></p>
                        <p><b>phone: </b><a href="tel:7349853130">(734) 985-3130</a></p>
                        <p><b>Ann Arbor, MI</b></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;