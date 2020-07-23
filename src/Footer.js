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
                        Ann Arbor, MI 48104<br/>email: eyeintheskydh@gmail.com<br/>phone: (734) 985-3130
                    </div>
                </div>
                <div class="row justfiy-content-center drew">
                    <div class="col-sm-12">
                        Designed and created by Drew Hirselj for Higher Resolution LLC - © 2020
                    </div>
                </div>              
            </div>
            
        </div>
        

    )
}

export default Footer;