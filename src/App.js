import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
render() {
      const {title} = this.props;
    return (
      <div className="Final-project-HYF_20">
    
      Hello
      </div>
    );
  }
}
App.defaultProps ={
  title: 'React'
}
export default App;
