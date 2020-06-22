import React from 'react';

function Contact(){
    return(
        <div>
            <h1>call me beep me if you wanna reach me</h1>
            <form action="mailto:eyeintheskydh@gmail.com" method="POST" encType="multipart/form-data"
            name="emailForm">
                Name:
                <input type="text" size="24" name="formName"/>
            </form>
            {/* <form action=”mailto:contact@yourdomain.com”

method=”POST”

enctype=”multipart/form-data”

name=”EmailTestForm”>

Name:<br>

<input type=”text” size=”24″ name=”VisitorName”><br><br>

Message:<br> <textarea name=”VisitorComment” rows=”4″ cols=”20″>

</textarea><br><br> <input type=”submit” value=”Submit”> </form> */}
        </div>
    );
}

export default Contact;