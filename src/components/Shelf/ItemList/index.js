import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../shelf.css';

class ItemList extends Component {

  state = {
    items: [],
    isFavorite: false
  };

  componentDidMount() {
    axios.get('http://api.jsonbin.io/b/5ac79b198daf792844bf3523').then(res => {
      const items = res.data;
      this.setState({ items });
    });
  }

  render() {
    return (
      <div className="itemShelf">
        <div className="itemListMain">
          {this.state.items.map(item => (
            <div key={item.sku} className="productBlock" href="#">
              <Favorites />
              <div className="imageContainer">
                <Link to={{ pathname: `/product/${item.sku}`, name: item.name, image: item.image, sku: item.sku, description: item.description, price: item.price }} >
                  <img alt={item.name} src={item.image} className="productImage" />
                </Link>
              </div>
              <Link to={{ pathname: `/product/${item.sku}`, name: item.name, image: item.image, sku: item.sku, description: item.description, price: item.price }} className="productLink">
                <div className="listLine">
                  <span className="listTitle">Product: </span>
                  {item.name}
                </div>
                <div className="listLine">
                  <span className="listTitle">Product Description: </span>
                  {item.description}
                </div>
                <div className="listLine">
                  <span className="listTitle">Price: </span>
                  <span className="red">${item.price}</span>
                </div>
              </Link>
            </div>
            )
          )}
        </div>
      </div>
    );
  }
}

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: false
    };
    //nexessary to make 'this' work in the callback
    this.setFavorite = this.setFavorite.bind(this);
  }

  setFavorite() {
    this.setState(prevState => ({
      isFavorite: !prevState.isFavorite
    }));
  }

  render() {
    return(
      <div className="likeContainer">
        <button className={this.state.isFavorite ? 'favSet' : 'favNotSet'}
              onClick={this.setFavorite}>
          <span>{this.state.isFavorite ? 'In Favorites' : 'Mark as Favorite'}</span>
        </button>
      </div>
    );
  }
}

export default ItemList;
