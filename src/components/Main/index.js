import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import ItemDetails from '../ItemDetails';
import ItemList from '../Shelf/ItemList';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/shelf' component={ItemList} />
      <Route path='/product/:number' component={ItemDetails}/>
    </Switch>
  </main>
)

export default Main;
