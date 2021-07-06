import axios from 'axios';
import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Row, Container, Col, Table } from 'reactstrap';
import CoinComponent from './CoinComponent';


const dummyData = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';
const options = [
  { value: 10, label: 10 },
  { value: 20, label: 20 },
  { value: 30, label: 30 },
  { value: 40, label: 40 },
  { value: 50, label: 50 },
  { value: 60, label: 60 },
  { value: 70, label: 70 },
  { value: 80, label: 80 },
  { value: 90, label: 90 },
  { value: 100, label: 100 },
  { value: 236, label: 'MAX' }
];


class CryptoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 10,
      coins: [],
      entry: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEntry = this.handleEntry.bind(this);
  }


  // Mounted dummyData at startup
  componentDidMount() { // special function to display data
    axios(dummyData) // shorthand for axios.get() 
      .then(res => {
        let coins = res.data;
        this.setState({ coins })
      }).catch(err => console.error(err));
  }


  // Handle change for dropdown
  handleChange(e) {
    // console.log(e.target.value);
    let data = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${e.target.value}&page=1&sparkline=false`;

    axios(data)
      .then(res => {
        let coins = res.data;
        this.setState({ coins })
        // console.log(coins);
      }).catch(err => console.error(err));
    this.setState({ value: e.target.value });
  }


  // Submit form
  handleSubmit(e) {
    this.setState({ value: e.target.value });
    e.preventDefault();
  }


  handleEntry(e) {
    // console.log(e.target.value);
    this.setState({ entry: e.target.value })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Crypto Price Tracker</h1>
          </Col>
        </Row>
        <br />
        <Row className="sticky-top">
          <Col className="col-lg-2">
            <Form>
              <FormGroup>
                <Label for="coinName">Coin</Label>
                <Input type="text" name="coin" id="coinName" placeholder="search coin" value={this.state.entry} onChange={this.handleEntry} />
              </FormGroup>
            </Form>
          </Col>
          <Col className="col-lg-2">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="selectName">Display Count</Label>
                <Input type="select" name="selectName" value={this.state.value} onChange={this.handleChange}>
                  {
                    options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))
                  }
                </Input>
              </FormGroup>
            </Form>
          </Col>
        </Row>


        <Row>
          <Col>
            <Table dark responsive className="text-white">
              <thead>
                <tr>
                  <th>Logo</th>
                  <th>Symbol</th>
                  <th>Name</th>
                  <th>price</th>
                  <th>Price Change</th>
                  <th>Volume</th>
                  <th>Market Cap</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.coins
                    .filter(coin => coin.name.toLowerCase().includes(this.state.entry))
                    .map(coin => {
                      return (
                        <CoinComponent
                          key={coin.id}
                          name={coin.name}
                          image={coin.image}
                          symbol={coin.symbol}
                          volume={coin.total_volume}
                          price={coin.current_price}
                          priceChange={coin.price_change_percentage_24h}
                          marketcap={coin.market_cap}
                        />
                      );
                    }
                  )
                }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default CryptoComponent;