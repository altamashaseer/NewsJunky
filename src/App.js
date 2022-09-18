import './App.css';
import React, { Component } from 'react'
import Navbar from './components/NavBar';
import News from './components/News';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
  apiKey= process.env.REACT_APP_NEWSJUNKY_APIKEY;

  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <LoadingBar color='#f11946' progress={this.state.progress}/>
          <Navbar /> {/* camel case mandetory */}
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key='home' pageSize='6' country='in' category='general' />} />
            <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key='science' pageSize='6' country='in' category='science' />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key='sports' pageSize='6' country='in' category='sports' />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key='technology' pageSize='6' country='in' category='technology' />} />
            <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key='business' pageSize='6' country='in' category='business' />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key='entertainment' pageSize='6' country='in' category='entertainment' />} />
            <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize='6' key='general' country='in' category='general' />} />
            <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize='6' key='health' country='in' category='health' />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}

