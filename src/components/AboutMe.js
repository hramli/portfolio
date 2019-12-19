import React from 'react';

class AboutMe extends React.Component{
    render(){
        return (
            <div className="AboutMe" id="aboutme">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <h1 className="display-4 section-header my-4 underline-animation" data-aos="fade-right">About Me</h1>
                            <div data-aos="fade-up">
                                <p>Most of my experience is on full stack development, building small to medium web applications.</p>
                                <p>Client-side: HTML, CSS, JavaScript/TypeScript, Angular 2+, React.</p>
                                <p>Server-side: Node JS, C#, ASP.NET Core.</p>
                                <p>I also use a lot of C/C++ and Java in school.</p>
                            </div>
                        </div>
                        <div className="col-md-7 skill-logo-col">
                            {/* Map */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;