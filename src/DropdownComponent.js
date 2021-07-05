import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Row, Container, Col } from 'reactstrap';
import axios from 'axios';

class DropdownComponent extends Component {
  constructor(props) {
    super(props);
    
    this.a = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=';
    
    this.state = {
      b: 10,
    }
    
    this.c = '&page=1&sparkline=false';
  }

  componentDidMount() {
    this.setState({ b: 100 });

    let url = this.a + this.b + this.c;
    axios(url) // shorthand for axios.get()
    .then(res => {
      let coins = res.data;
      this.setState({ coins })
    }).catch(err => console.error(err));
  }
  


  
  render() {
    return(
      <Container>
        <Row>
          <Col>
            <h1>Logo</h1>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="col-lg-2">
            <Form>
              <FormGroup >
              <Label for="exampleSelect">Coin</Label>
                <Input type="text" name="coin" id="coinName" placeholder="search coin" />
              </FormGroup>
            </Form>
          </Col>

          <Col className="col-lg-2">
            <FormGroup>
              <Label for="exampleSelect">Pages</Label>
                <Input type="select" name="select" onChange={this.componentDidMount.bind(this)} >
                </Input>
            </FormGroup>
          </Col>
        </Row>
      </Container>
    )
  }


}


export default DropdownComponent;