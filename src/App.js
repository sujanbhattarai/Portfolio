import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, contact } from 'react-mdl';
import Main from './component/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (


      <div className="demo-big-contact">
      <br></br><br></br>
    <Layout>


        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/"><h2><strong>Sujan Bhattarai</strong></h2></Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/aboutme">About Me</Link>

                <Link to="/contact">Contact</Link>

            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/"><h2><strong>Sujan Bhattarai</strong></h2></Link>}>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <contact>
            <div className="page-contact" />
            <Main/>
        </contact>
    </Layout>
</div>

    );
  }
}

export default App;
