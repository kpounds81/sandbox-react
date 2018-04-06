import React, { Component } from 'react';
import axios from 'axios';
import '../shelf.css';

class ItemList extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    axios.get('http://api.jsonbin.io/b/5ac79b198daf792844bf3523').then(res => {
      console.log(res.data);
      const items = res.data;
      this.setState({ items });
    });
  }
  render() {
    return (
      <div className="itemShelf">
        <ul className="itemListMain">
          {this.state.items.map(item => (
            <li key={item.sku}>
              <span className="listTitle">Product: </span>
              {item.name}
              <div>
                <span className="listTitle">Product Description: </span>
                {item.description}
              </div>
              <div>
                <span className="listTitle">Price: </span>
                <span className="red">${item.price}</span>
              </div>
              <img alt={item.name} src={item.image} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ItemList;
