import React from 'react';

class ExperienceCard extends React.Component{
    render(){
        return (
            <div className="ExperienceCard sections">
                <div className="row">
                    <div className="col-md-5 img-col" data-aos="fade-right" data-aos-duration="500" data-aos-once="true">
                        {/* {sectionHeader} */}
                        <div className="outer">
                            <div className="middle">
                                <img src={this.props.experience.image}/>   
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7" data-aos="">
                        <h1 className="display-4 experience-title">{this.props.experience.title}</h1>
                        <ul>
                            {this.props.experience.description}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExperienceCard;