import React, { Component } from 'react';
import './itemDetails.css';

class ItemDetails extends Component {
  render() {
    const item = this.props.location;
    console.log(this.props.location);
    return(
      <div className="productDetailsPage">
        <h1>{item.name}</h1>
        <img src={item.image} alt={`${item.name} Product`} className="pdpImage" />
        <div className="productBox">
          <span className="priceLabel">Price: <span className="redPrice">{`$${item.price}`}</span></span>
          <div className="atcButton">
            <button>Add To Cart</button>
          </div>
        </div>
        <h4 className="pdpDescription">Product Description:</h4>
        <p className="description">{item.description}</p>
      </div>
    )
  }
}

export default ItemDetails;
