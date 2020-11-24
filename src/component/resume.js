import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './Skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              {/* <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 /> */}
            </div>

            <h2 style={{paddingTop: '2em'}}>Sujan Bhattarai</h2>
            <h4 style={{color: 'grey'}}>Front end Developer</h4>
          
            <h5>Address</h5>
            <p>2116 Gaston Place Unite B</p>
            <h5>Phone</h5>
            <p>512-550-0855</p>
            <h5>Email</h5>
            <p>sujan.bhattarai@ttu.edu</p>

            <h5>sujanbhattarai.com</h5>
            <p>sujanbhattarai.com</p>
            <h5>Linkden</h5>
            <p>https://www.linkedin.com/in/sujan-bhattarai/</p>

            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>


              <h2>Experience</h2>

            <Experience
              startYear={2020}
              endYear={2020}
              jobName="Feb 2020 - Aug 2020"
              jobDescription="Implement custom designed websites by writing source code Maintain custom designed websites by updating content, style, and functionality Create documentation and style guide for users. Train users on how to maintain their custom website"
              />


              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Education</h2>
              <Education
                startYear={2019}
                endYear={2020}
                schoolName="Texas Tech University"
                schoolDescription="Texas Tech University is a large research institution in the college town of Lubbock. Students are required to live on campus until they have completed 30 hours of course work. The Texas Tech Red Raiders sports teams compete in the NCAA Big 12 Conference and are particularly competitive in football and basketball."
                 />

                 <Education
                   startYear={2017}
                   endYear={2019}
                   schoolName="Austin Community College"
                   schoolDescription="Austin Community College is a nationally recognized two-year college. ACC serves Central Texas as the primary gateway to higher education and technical training."
                    />
                  <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="Java"
                  progress={90}
                  />
                  <Skills
                    skill="React"
                    progress={25}
                    />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
