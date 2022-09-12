import './App.css';
import React, { Component } from 'react'
import Navbar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>    {/* camel case mandetory */}
        <News pageSize={6}/>
      </div>
    )
  }
}

