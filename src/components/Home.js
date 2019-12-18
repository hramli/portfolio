import React from 'react';
import profilepic from './../images/profilepicture.png'
import { Link, animateScroll as scroll } from 'react-scroll';

class Home extends React.Component{
    render(){
        return (
            <div className="Home container">
                <nav className="navbar fixed-top navbar-dark fade-in-top navbar-expand-md">
                    <div className="container">
                        <Link
                            activeClass="active"
                            className="navbar-brand"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        >HR</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link
                                        activeClass="active"
                                        className="nav-link"
                                        to="experience"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration= {500}
                                    >Experience</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="outer" id="home">
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
                <Link
                            activeClass="active"
                            className="navbar-brand"
                            to="experience"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        ><i className="fas fa-chevron-down"></i></Link>
                </div>
            </div>
        )
    }
}

export default Home;