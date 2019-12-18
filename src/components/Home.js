import React from 'react';
import profilepic from './../profilepicture.png'

class Home extends React.Component{
    render(){
        return (
            <div className="Home container">
                <nav className="navbar fixed-top navbar-dark fade-in-top navbar-expand-md">
                    <div className="container">
                        <a className="navbar-brand" href="#">HR</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="outer">
                    <div className="middle">
                        <div className="row">
                            <div className="col-12 col-md-6 fade-in-left">
                                <div className="outer">
                                    <div className="middle">
                                        <h1 className="display-4">Hello, world!</h1>
                                        <p className="lead">I am Harry, a <strong>Computer Science</strong> senior studying at <strong>University of California, Los Angeles</strong>.</p>                                         
                                        <p className="lead home-lead-2">Passionate about tech and football.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 profile-image-container fade-in-right">
                                <div className="profile-image">
                                    <img src={profilepic} alt="profile picture"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chevron-container bounce">
                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>
        )
    }
}

export default Home;