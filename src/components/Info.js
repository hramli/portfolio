import React from 'react';
import ExperienceCard from './ExperienceCard';

class Info extends React.Component{

    render(){
        let experiences = this.props.info.cardInfo.map((exp) => (
            <ExperienceCard experience={exp} />
        ));

        return (
            <div className="Info">
                <div className="container">
                    <h1 id="experience" className="display-4 section-header my-4 underline-animation" data-aos="">{
                        this.props.info.name}
                    </h1>
                    {experiences}
                </div>
            </div>
        );
    }
}

export default Info;