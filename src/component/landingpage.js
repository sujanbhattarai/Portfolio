import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Resume from './resume';

class Landing extends Component {
  render() {
    return (
        <div style={{ width: '100%', margin: 'auto' }}>
          <Grid className="landing-grid">
            <Cell col={12}>
              {/* <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="Sujan"
                className="avatar-img"
              /> */}

              <div className="banner-text">
                <title>Sunwoo's Personal Website</title>

                <h1> I Am Full Stack Web Developer</h1>

                <hr />

                <p>HTML/CSS | JavaScript | Java | React | NodeJS </p>

                <div className="social-links">

                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/sujan-bhattarai/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>

                  {/* Github */}
                  <a href="https://github.com/session" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" />
                  </a>

                  {/* Freecodecamp */}
                  <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                  </a>

                  {/* facebook */}
                  <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-faceBook-square" aria-hidden="true" />
                  </a>

                </div>
              </div>
            </Cell>
          </Grid>
          <Resume/>

        </div>
    )
  }
}

export default Landing;
