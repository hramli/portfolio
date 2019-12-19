import React from 'react';
import * as d3 from 'd3';
import Graph from '../components/graph/Graph';

class Skills extends React.Component{
    componentDidMount(){
        this.force = d3.forceSimulation(this)
    }

    render(){
        return (
            <div className="Skills">
                <div className="container">
                    <div className="row skill-row">
                        <div className="col-md-6" data-aos="fade-right">
                            <h1 id="skills" className="display-4 section-header my-4" data-aos="fade-right">Skills</h1>
                            <p>Most of my experience is on full stack development, building small to medium web applications.</p>
                            <p>Client-side: HTML, CSS, JavaScript/TypeScript, Angular 2+, React.</p>
                            <p>Server-side: Node JS, C#, ASP.NET Core.</p>
                            <p>I also use a lot of C/C++ and Java in school.</p>
                        </div>
                        <div className="col-md-6 skill-logo-col" data-aos="fade-left">
                            <div id="skill-force-layout">
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