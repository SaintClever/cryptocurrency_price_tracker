import React from 'react';


function CoinComponent({ name, image, symbol, price, volume, priceChange, marketcap }) {
  const link = `
    https://www.coingecko.com/en/coins/${name.toLowerCase()
    .replace(/\s/g, '-')
  }`;

  return (
    <tr>
      <td>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={image} alt={name} width="25px" />
        </a>
      </td>
      <td><a href={link} target="_blank" rel="noreferrer">{symbol}</a></td>
      <td><a href={link} target="_blank" rel="noreferrer">{name}</a></td>
      <td>${price.toLocaleString()}</td>

        {
          priceChange < 0 ?
          (<td style={{color: "#fc78c4"}}>{priceChange.toFixed(2)}%</td>) :
          (<td style={{color: "#4adc71"}}>{priceChange.toFixed(2)}%</td>)
        }

      <td>{volume.toLocaleString()}</td>
      <td>{marketcap.toLocaleString()}</td>
    </tr>
  )
}

export default CoinComponent;