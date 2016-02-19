import React, {Component} from 'react';
import {} from './style.less';
import StationList from '../StationList/StationList.js';

class App extends Component {
  render(){
    return (
    <div className="app">
      Hello world from a component
      <StationList />
      <p>A p tag in the app component.</p>
      <StationList />
    </div>);
  }
}

export default App;
