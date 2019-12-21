import React from 'react';
import 'leaflet/dist/leaflet.css';

import ReactMapGL, {Marker} from 'react-map-gl';
import {AutoSizer} from 'react-virtualized';

const accessToken = 'inserttokenhere';

class AboutMe extends React.Component{

    state = {
        viewport: {
            width: "100%",
            height: 405,
            latitude: 34.489,
            longitude: -116.4462,
            zoom: 5
        }
    };

    render(){
        return (
            <div className="AboutMe sections" id="aboutme">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <h1 className="display-4 section-header my-4 underline-animation" data-aos="">About Me</h1>
                            <div data-aos="">
                                <p>Undergraduate student studying Computer Science at UCLA.</p>
                                <p>Determined, passionate, and detailed. Love music, movies, television series, and code. <strong>(especially debugging <i class="far fa-smile"></i>)</strong></p>
                                <p>Feel free to reach out to me via <a href="mailto:harryramli99@gmail.com" className="h-logo">email</a> or <a href="https://www.linkedin.com/in/harryramli/" target="_blank" className="h-logo">Linkedin</a>.</p>                                
                            </div>
                        </div>
                        <div className="col-md-7 map-col" data-aos="fade-left" data-aos-duration="500" data-aos-once="true">
                            <AutoSizer>
                                {({height, width}) => (
                                        <ReactMapGL 
                                            {...this.state.viewport} 
                                            width = {width}
                                            height = {height}
                                            mapboxApiAccessToken={accessToken}
                                            mapStyle="mapbox://styles/harryramli/ck4cii9n619id1cpfe0t57cfl"
                                            onViewportChange={(viewport) => this.setState({viewport})}
                                            >
                                                <Marker latitude={34.0689} longitude={-118.4452} offsetLeft={-20} offsetTop={-10}>
                                                    <button className="map-pin">
                                                        <i className="fab fa-periscope"></i>
                                                    </button>
                                                </Marker>
                                        </ReactMapGL>
                                )}
                            </AutoSizer>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;