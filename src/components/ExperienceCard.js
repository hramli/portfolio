import React from 'react';

class ExperienceCard extends React.Component{
    render(){
        let sectionHeader;
        let experienceTitleClass = "display-4 experience-title";

        if(this.props.experience.first != undefined && this.props.experience.first == true)
        {
            sectionHeader = (
                <h1 id="experience" className="display-4 section-header my-4 underline-animation" data-aos="fade-right">
                    Experience
                </h1>
            );
            // experienceTitleClass += " first-experience-title"
        }

        return (
            <div className="ExperienceCard sections">
                <div className="row">
                    <div className="col-md-5 img-col" data-aos="fade-right">
                        {/* {sectionHeader} */}
                        <img src={this.props.experience.image}/>
                    </div>
                    <div className="col-md-7" data-aos="fade-left">
                        <h1 className={experienceTitleClass}>{this.props.experience.title}</h1>
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