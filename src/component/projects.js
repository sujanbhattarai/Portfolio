import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'Blue'}} > Project #1</CardTitle>
            <CardText> This is a web application whuch shows and Display the current weather and current location based on the user current ;ocation
              </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/sujanbhattarai/SE_I---Weather-Rader" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" /> GitHub
                  </a></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: "red"}} > Project #2</CardTitle>
            <CardText>This app request/donate blood type depending on the individual donate/request the blood.</CardText>
            <CardActions border>
              <Button colored>
              <a href="https://github.com/sujanbhattarai/BloodMe" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" /> GitHub
                  </a>
              </Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'green'}} > Project #3</CardTitle>
            <CardText>marketplace app that conglomerates results from other marketplaces such as Facebook Marketplace, Ebay, Amazon, Wish. </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/sujanbhattarai/BloodMe" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" /> GitHub
                  </a></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Angular</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }
  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Java</Tab>
          <Tab>React</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="contact">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}
export default Projects;
