import React, { Component } from 'react';
import axios from 'axios';
import '../shelf.css';

class ItemList extends Component {
  state = {
    items: [],
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
              <Likes />
              <div className="imageContainer">
                <a href="#">
                  <img alt={item.name} src={item.image} className="productImage" />
                </a>
              </div>
              <a href="#" className="productLink">
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
              </a>
            </div>
            )
          )}
        </div>
      </div>
    );
  }
}

class Likes extends Component {
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
              onClick={this.setFavorite} >
          <span>{this.state.isFavorite ? 'In Favorites' : 'Mark as Favorite'}</span>
        </button>
      </div>
    );
  }
}

export default ItemList;
