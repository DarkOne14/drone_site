import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div class="footer">
            <div class="container-fluid" id="foot">
                <div class="row">
                    <div class="col-sm-6">
                        <img src="/images/drone_cert.png" id="cert" />
                    </div>
                    <div class="col-sm-6 my-auto">
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