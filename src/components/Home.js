import React from 'react';

class Home extends React.Component{
    render(){
        return (
            <div className="Home container">
                <div className="outer">
                    <div className="middle">
                        <h1 className="display-4">Hello, world!</h1>
                        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>                                         
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;