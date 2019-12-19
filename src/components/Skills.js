import React from 'react';
import * as d3 from 'd3';
import Graph from './graph/Graph';

class Skills extends React.Component{
    componentDidMount(){
        this.force = d3.forceSimulation(this)
    }

    render(){
        return (
            <div className="Skills sections" id="skills">
                <div className="container">
                    <div className="row skill-row">
                        <div className="col-md-6">
                            <h1 id="skills" className="display-4 section-header my-4 underline-animation" data-aos="fade-right">Skills</h1>
                            <div data-aos="fade-up">
                                <p>Most of my experience is on full stack development, building small to medium web applications.</p>
                                <p>Client-side: HTML, CSS, JavaScript/TypeScript, Angular 2+, React.</p>
                                <p>Server-side: Node JS, C#, ASP.NET Core.</p>
                                <p>I also use a lot of C/C++ and Java in school.</p>
                            </div>
                        </div>
                        <div className="col-md-6 skill-logo-col">
                            <div id="skill-force-layout" data-aos="fade-down">
                                <Graph />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;