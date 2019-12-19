import React from 'react';
import Home from './components/Home';
import Info from './components/Info';
import Skills from './components/Skills';
import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, animateScroll as scroll } from 'react-scroll';

//importing images for experience section
import rms from './images/rms.png';
import amz from './images/amz.png';

//import logos for skills sectoin
import angular from './images/skills/testlogo.png';
import c from './images/skills/c.png';
import csharp from './images/skills/csharp.png';
import java from './images/skills/java.png';
import js from './images/skills/js.png';
import mysql from './images/skills/mysql.png';
import netcore from './images/skills/netcore.png';
import react from './images/skills/react.png';

class App extends React.Component {
  state = {
    experience: {
        name: 'Experience',
        cardInfo: [
          {
            id: 1,
            title: 'Incoming SDE Intern, Summer 2020',
            description: [
    
            ],
            image: amz
          },
          {
            id: 2,
            title: 'Software Engineer Intern, Summer 2019',
            description: [
                <li>Streamlined company’s auditing process by building a full-stack timetracking web app with JWT-secured REST API service using Angular, ASP.NET Core, MySQL and deployed as Docker containers to AWS.</li>,
                <li>Developed a monitoring web app used by the Sales and Support team using <strong>Angular</strong>, ASP.NET Core, SQL Server and hosted on Internet Information Services (IIS).</li>,
                <li>Implemented a draggable and customizable KPI dashboard with data visualization using Angular and D3.js, and demoed the product concept to the CEO.</li>,
                <li>Participated in daily standups and working group staff meetings.</li>
            ],
            stack: [
                'Angular',
                'ASP.NET Core'
            ],
            image: rms
          }
        ]        
    },
    education: {
      name: 'Education',
      cardInfo: [

      ]
    },
    skills:[
      {
        name: 'Angular',
        logo: angular
      },
      {
        name: 'C',
        logo: c
      },
      {
        name: 'C#',
        logo: csharp
      },
      {
        name: 'Java',
        logo: java
      },
      {
        name: 'JavaScript',
        logo: js
      },
      {
        name: 'MySQL',
        logo: mysql
      },
      {
        name: '.NET Core',
        logo: netcore
      },
      {
        name: 'React',
        logo: react
      }
    ]
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
          <Info info={this.state.experience} />
          <Skills skills={this.state.skills}/>
          {/* <Info info={this.state.education} /> */}
        </div>
      </div>
    );
  }
}

export default App;
