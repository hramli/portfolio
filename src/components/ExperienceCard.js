import React from 'react';

class ExperienceCard extends React.Component{
    render(){
        return (
            <div className="ExperienceCard">
                <div className="row">
                    <div className="col-md-5" data-aos="fade-right">
                        <img src={this.props.experience.image}/>
                    </div>
                    <div className="col-md-7" data-aos="fade-left">
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