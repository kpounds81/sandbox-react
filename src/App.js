import React, { Component } from 'react';
import Header from './components/Header';
import ItemList from './components/Shelf/ItemList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ItemList />
      </div>
    );
  }
}

export default App;
