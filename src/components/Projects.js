import React from 'react';


class Projects extends React.Component{

    render(){
        return (
            <div className="Projects sections" id="projects">
                <div className="container">
                    {/* <div className="row"> */}
                        <h1 className="display-4 section-header my-4 underline-animation" data-aos="">Projects</h1>
                        <p>View all of my pet projects <a className="text-link underline-animation" target="_blank" href="https://github.com/hramli">here</a></p>                        
                    {/* </div> */}
                </div>
            </div>
        )
    }
}

export default Projects;