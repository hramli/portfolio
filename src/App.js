import React from 'react';
import Home from './components/Home';
import Info from './components/Info';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

//importing images for experience section
import rms from './images/rms.png';
import amz from './images/amz.png';

class App extends React.Component {
  state = {
    experience: {
        name: 'Experience',
        cardInfo: [
          {
            id: 0,
            title: 'SDE Intern, Summer 2020',
            description: [
              <li key="0-1">Improved visibility for Amazon’s catalog processing pipeline by
              implementing a console web application with a serverless architecture using <strong>ReactJS</strong>,
              <strong>NodeJS</strong>, <strong>Java</strong>, and <strong>AWS Cloud Development Kit</strong>.</li>,
              <li key="0-2">Went through the whole software development lifecycle: design, infrastructure setup, implementation, testing.</li>
            ],
            stack: [
              'ReactJS',
              'Java',
              'AWS'
            ],
            image: amz,
            first: true
          },
          {
            id: 1,
            title: 'Software Engineer Intern, Summer 2019',
            description: [
                <li key="1-0">Streamlined company’s auditing process by building a full-stack timetracking web app with
                  JWT-secured REST API service using <strong>Angular</strong>, <strong>ASP.NET Core</strong>, <strong>MySQL</strong> and
                  deployed as <strong>Docker</strong> containers to AWS.</li>,
                <li key="1-1">Developed a monitoring web app used by the Sales and Support team using <strong>Angular</strong>,
                  <strong>ASP.NET Core</strong>, <strong>SQL Server</strong> and hosted on Internet Information Services (IIS).</li>,
                <li key="1-2">Implemented a draggable and customizable KPI dashboard with data visualization using <strong>Angular </strong>
                  and <strong>D3.js</strong>, and demoed the product concept to the CEO.</li>,
                <li key="1-3">Participated in daily standups and working group staff meetings.</li>
            ],
            stack: [
                'Angular',

                'ASP.NET Core'
            ],
            image: rms,
            first: false
          }
        ]
    }
  }

  componentDidMount(){
    AOS.init({
      duration: 2000
    });
  }

  render() {
    return (
      <div className="App">
        <div className="Home">
          <Home />
        </div>
        <div className="banner mt-2">
          <AboutMe />
          <Info info={this.state.experience} />
          <Skills skills={this.state.skills}/>
          <Projects />

          <footer className="page-footer font-small">
            <div className="footer-copyright text-center py-4">
              © Harry Ramli
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
