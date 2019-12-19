import React from 'react';
import Home from './components/Home';
import Info from './components/Info';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
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
          {/* <Info info={this.state.education} /> */}

          <footer class="page-footer font-small">
            <div class="footer-copyright text-center py-4">
              © Harry Ramli
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
