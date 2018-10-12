import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import Jumbotron from "../../components/Jumbotron";
import {Container, Row, Col} from "../../components/Grid"
import { List, ListItem } from "../../components/List";
import firebase from '../../base'




  const disasterImages = {
    Fire : {
      img : "https://s7d2.scene7.com/is/image/TWCNews/0618_fire_genericjpg?wid=767&hei=432&$wide-bg$",
      charity : "Red Cross"
  }
}
class Local extends Component {
    state = {
      local: [],
  
    };
  
    componentDidMount() {
      this.loadLocal();
    }

   
    loadLocal = () => {
      API.getLocal()
        .then(res =>
          this.setState({ local: res.data.DisasterDeclarationsSummaries })
        )
        .catch(err => console.log(err));
        console.log (this.state.local)
    };
    
  
    render() {
        return (
              <div>
           <Nav />
           <Jumbotron />
          <Container>
            <Row>
              <Col size="md-12">
              <List>
              {this.state.local.map((item, index ) => {
                 return (
                  <ListItem
                  key = {index}
                  image={disasterImages[item.incidentType].img}
                  charityname={"Charity: "}
                  charity={disasterImages[item.incidentType].charity}
                  text={"Incident: "}
                  Incident={item.incidentType}
                  County={item.declaredCountyArea}
                  />  
                 )
              })}
              </List>
              </Col>
              </Row>
              </Container>
              </div>
        )}
          
        }

  
  export default Local;