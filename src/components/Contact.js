// -- Setup ------------------------------
    import React from 'react';
    import ReactDOM from 'react-dom';
    import {Helmet} from 'react-helmet';
// ---------------------------------------

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            contactName: '',
            contactEmail: '',
            contactTel: '',
            message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }
    handleSubmit(e){
        e.preventDefault();
        sendEmail(this.state);
    }
    render(){
        return(
            <div>
                <Helmet>
                    <title>Broadstone Rare Breeds - contact</title>
                    <meta name="description" content="Broadstone Rare Breeds are a farm raising rare breed sheep and chickens in an organic/biodynamic way" />
                </Helmet>
                <h1>Contact us</h1>
                <form id="contactForm" onSubmit={this.handleSubmit}>
                    <p>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="contactName"
                            value={this.state.contactName}
                            onChange={this.handleChange} />
                        <span>*</span>
                    </p>
                    <p>
                        <label>Email:</label>
                        <input
                            type="text"
                            name="contactEmail"
                            value={this.state.contactEmail}
                            onChange={this.handleChange} />
                        <span>*</span>
                    </p>
                    <p>
                        <label>Telephone:</label>
                        <input
                            type="text"
                            name="contactTel"
                            value={this.state.contactTel}
                            onChange={this.handleChange} />
                    </p>
                    <p>
                        <label>Message:</label>
                        <textarea
                            value={this.state.message}
                            name="message"
                            onChange={this.handleChange} />
                        <span>*</span>
                    </p>
                    <p className="required">
                        <span>*</span> : Required information
                    </p>
                    <p id="emailErrorNote">
                        Please complete the required information
                    </p>
                    <p className="control">
                        <input type="submit" value="Send message" />
                    </p>
                </form>
                <div id="emailThankYou">
                    <h2>Thank you for contacting Broadstone Rare Breeds</h2>
                    <p>We aim to reply to all contacts within 3 working days</p>
                </div>
                <div id="emailError">
                    <h2>There's been an error sending your email</h2>
                    <p>Please refresh the page and try again...</p>
                    <p>If you continue to see this error, please contact us directly at <a href="mailto:jane@broadstoneuk.co.uk">jane@broadstoneuk.co.uk</a></p>
                </div>
            </div>
        )
    }
}

function sendEmail(formContents){
    const formData = [{
        contactName: formContents.contactName,
        contactEmail: formContents.contactEmail,
        contactTel: formContents.contactTel,
        message: formContents.message
    }];
    let sendEmail = false;
    if( formContents.contactName !== '' && formContents.contactEmail !== '' && formContents.message !== '' ){
        sendEmail = true;
    }else{
        document.getElementById('emailErrorNote').style.display = 'block';
    }
    if(sendEmail){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function(){
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('contactForm').style.display = 'none';
                document.getElementById('emailThankYou').style.display = 'block';
            }
            if(xmlhttp.readyState == 4 && xmlhttp.status == 405){
                document.getElementById('contactForm').style.display = 'none';
                document.getElementById('emailError').style.display = 'block';
            }
        }
        xmlhttp.open('POST', 'sendMail.php');
        xmlhttp.send(JSON.stringify(formData));
    }
}

export default Contact;
