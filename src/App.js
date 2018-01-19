import React, { Component } from 'react';
import Typed from 'react-typed';
import Container from './components/Container';
import Definition from './components/Definition';
import Section from './components/Section';
import Changelog from './containers/Changelog';
import headerMD from './markdown/header';
import changelogMD from './markdown/changelog';
import toolbeltMD from './markdown/toolbelt';
import contribuingMD from './markdown/contributing';

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
      <div>
        <video id="bgvid" playsInline autoPlay muted loop>
          <source src="./data.mp4" type="video/mp4" />
        </video>
        <Container>
          <div className="measure section">
            <h1>- Colm Seale</h1>
            <Typed 
              strings={['Software Engineer.',
                'Open Source Contributer.',
                'Agile Advocate.',
                'Blockchain Enthusiast.',
                'Aspiring Data Scientist.',
                'Nerd.']} 
              typeSpeed={55} 
              loop
            />
          </div>
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
      </div>
    );
  }
}
export default App;
