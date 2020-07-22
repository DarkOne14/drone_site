import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div>
            <div class="container-fluid footer">
                <div class="row justify-content-around">
                    <div class="col-sm-4 my-auto">
                        <img src="/images/drone_cert.png" id="cert" />
                    </div>
                    <div class="col-sm-4 my-auto">
                        <p>Ann Arbor, MI 48104<br/>email: eyeintheskydh@gmail.com<br/>phone: (734) 985-3130</p>
                    </div>
                </div>             
            </div>
            <div class="drew">
                <p>Designed and created by Drew Hirselj for Higher Resolution LLC - © 2020</p>
            </div> 
        </div>
        

    )
}

export default Footer;