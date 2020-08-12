import React, {Component} from 'react';
import * as emailjs from 'emailjs-com';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            message: '',
        };
        this.changeState = this.changeState.bind(this);
        this.submitForm = this.submitForm.bind(this);


    }

    changeState(event) {
        let changeName = event.target.name;
        this.setState({[changeName]: event.target.value})
    }

    submitForm(event) {

    }


    render() {

        if (this.props.data) {
            var name = this.props.data.name;
            var street = this.props.data.address.street;
            var city = this.props.data.address.city;
            var state = this.props.data.address.state;
            var zip = this.props.data.address.zip;
            var phone = this.props.data.phone;
            var email = this.props.data.email;
            var message = this.props.data.contactmessage;
            var country = this.props.data.address.country;
        }

        return (
            <section id="contact">

                <div className="row section-head">

                    <div className="three columns header-col">

                        <h1>
                            <span>Get In Touch.</span>
                        </h1>

                    </div>

                    <div className="nine columns">

                        <p className="lead">{message}</p>

                    </div>

                </div>

                <div className="row">
                    <div className="ten columns">

                        <form action="https://formspree.io/joe04024@gapp.nthu.edu.tw" method="POST">
                            <div>
                                <label>Email：<span className="required">*</span></label>
                                <input type="email" id="email" name="email"
                                       value={this.state.email}
                                       onChange={this.changeState} required/>
                            </div>
                            <div>
                                <label>Message：<span className="required">*</span></label><br/>
                                <textarea id="introduction" name="message"
                                          value={this.state.message}
                                          onChange={this.changeState}>
                        </textarea>
                                <br/>
                            </div>
                            <div>
                                <label/>
                                <input type="submit" value="Send"/>
                            </div>
                        </form>


                        <div id="message-warning"> Error boy</div>
                        <div id="message-success">
                            <i className="fa fa-check"/>Your message was sent, thank you!<br/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }


}

export default Contact;
