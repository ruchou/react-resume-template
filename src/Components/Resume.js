import React, {Component} from 'react';

class Resume extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.data) {
            var education = this.props.data.education.map(function (education) {
                return( <div key={`edcucation_${education.school}`}>
                            <h3>{education.school}</h3>
                                <p className="info">{education.degree} <span>&bull;</span><em
                                    className="date">{education.graduated}</em> <br/>
                                    {education.ranking}
                                </p>
                                <p>{education.description}</p>
                        </div>
                )
            });

            var work = this.props.data.work.map( (work) => {
                const listWorkDescription = work.description.map((w, idx) =>
                    <li key={`work_${idx}`}>{w}</li>
                );

                return( <div key={work.company}>
                            <h3>{work.company}</h3>
                            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
                            <p>{listWorkDescription}</p>
                        </div>)
            });
            var skills = this.props.data.skills.map( (skills)=> {
                var className = 'bar-expand ' + skills.name.toLowerCase();
                return( <li key={`skill_${skills.name}`}><span style={{width: skills.level}}
                                                   className={className}> </span><em>{skills.name}</em></li>)
            })
        }

        return (
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                {education}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row work">

                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        {work}
                    </div>
                </div>


                <div className="row skill">

                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>

                    <div className="nine columns main-col">

                        {/*<p>{skillmessage}*/}
                        {/*</p>*/}

                        <div className="bars">
                            <ul className="skills">
                                {skills}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;
