import React, { Component } from 'react';
import Container from './components/Container';
import Definition from './components/Definition';
import Section from './components/Section';
import Changelog from './containers/Changelog';

const headerMD = "# - Colm Seale [(cseale)](https://github.com/cseale)\n\nA software engineer living in Galway, Ireland, who as a keen interest in UI and server development, and is beginning to explore the data science and machine learning realms. Currently working in [Altocloud](https://www.altocloud.com) and contributor to mulitple OS projects like NASA [OpenMCT](https://nasa.github.io/openmct/), [Storj](https://storj.io/) and the [Rust Programming Language](https://www.rust-lang.org/en-US/community.html)";

const changelogMD = `# - ChangeLog

#Altocloud (Aug 2016 to Present)

Web and Mobile Application Engineer: Developing applications for customer messaging, data visualisations, designing content and advertising and general administration. Achieved using AngularJS, React, React Native, WebSockets, Service Workers, NodeJS

#Fidelity Investments (Sept 2012 to July 2016)

Full Stack Engineer: Architected and developed a Reporting and DaaS Platform End-To-End from early project inception through to production and maintainence on a distributed agile team.

Front-End Tech Lead: Created Single Page Web Apps using AngularJS 1.X, ReactJS, Bootstrap, NodeJS, NPM, Grunt, Bower, LESSJS.

Server-Side: Designed and developed microservices using Docker and the Spring Boot ecosystem.

DevOps: Increased our DevOps capabilities by developing a Continuous Deployment strategy through Jenkins, Nexus and custom UNIX scripts to manage our multiple services and migration to Docker containers.
`;

const toolbeltMD = `# - Dependencies

Java, Javascript, NodeJS, ReactJS Native, AngularJS, Spring 4, Python, Chef, Rust, Docker, Machine Learning, CI & CD
`;

const contribuingMD = `# - Contributing

[NASA OpenMCT](https://nasa.github.io/openmct/) |
[Storj](https://storj.io/) |
[Rust Programming Language](https://www.rust-lang.org/en-US/community.html)
`;


const footerList = [{
  term: "Email",
  description: "[colm.seale@gmail.com](mailto:colm.seale@gmail.com)"
},{
  term: "Github",
  description: "[github.com/cseale](https://github.com/cseale)"
},{
  term: "LinkedIn",
  description: "[linkedin.com/in/colm-seale-977a2b4b](https://www.linkedin.com/in/colm-seale-977a2b4b)"
}];

class App extends Component {
  render() {
    return (
      <Container>
        <Section
          className="measure section"
          tagName='header'
          markdown={headerMD}
        />

        <Section
          className="measure section"
          tagName='header'
          markdown={toolbeltMD}
        />

        <Section
          className="measure section"
          tagName='header'
          markdown={changelogMD}
        />

        <Section
          className="measure section"
          tagName='header'
          markdown={contribuingMD}
        />

        <Changelog />

        <Definition
          id="footer"
          className="measure section"
          list={footerList} />
      </Container>
    );
  }
}
export default App;
