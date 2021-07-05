import React, { Component } from 'react';
import axios from 'axios';
import url from './data';
import CoinComponent from './CoinComponent';

class CryptoComponent extends Component {
  state = {
    coins: []
  }

  componentDidMount() { // special function to display data
    axios(url) // shorthand for axios.get()
      .then(res => {
        let coins = res.data;
        this.setState({ coins })
      }).catch(err => console.error(err));
  }

  render() {
    return (
      <>
        {this.state.coins.map(coin => {
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
        })}
      </>
    )
  }

}


export default CryptoComponent;