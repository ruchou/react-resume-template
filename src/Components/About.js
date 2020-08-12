import React, {Component} from 'react';
import PDF from '../Yan_Ru_Jhou_CV.pdf'

class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        if (this.props.data) {
            var name = this.props.data.name;
            var profilepic = "images/" + this.props.data.image;
            var bio = this.props.data.bio;
            var street = this.props.data.address.street;
            var city = this.props.data.address.city;
            var state = this.props.data.address.state;
            var zip = this.props.data.address.zip;
            // var phone= this.props.data.phone;
            var email = this.props.data.email;
            var resumeDownload = "files/" + this.props.data.resumedownload;

            var phone = this.props.data.phone.map(function (eachPhone, ind) {
                    return <li key={ind}>{eachPhone}</li>
                }
            );
        }


        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src={profilepic} alt="Yan-Ru Profile Pic"/>
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>

                        <p>{bio}</p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>{name}</span><br/>
                                    <span>{phone}</span>
                                    <span>{email}</span>
                                </p>
                            </div>
                            <div className="columns download">
                                <p>
                                    <a href={PDF} target="_blank" className="button"><i className="fa fa-download"></i>Download
                                        Resume</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default About;
