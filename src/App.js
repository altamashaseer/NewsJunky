import './App.css';
import React, { Component } from 'react'
import Navbar from './components/NavBar';
import News from './components/News';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar /> {/* camel case mandetory */}
          <Routes>
            <Route path="/" element={<News key='home' pageSize='6' country='in' category='general'/>} />
            <Route path="/science" element={<News key='science' pageSize='6' country='in' category='science'/>} />
            <Route path="/sports" element={<News key='sports' pageSize='6' country='in' category='sports'/>} />
            <Route path="/technology" element={<News key='technology' pageSize='6' country='in' category='technology'/>} />
            <Route path="/business" element={<News key='business' pageSize='6' country='in' category='business'/>} />
            <Route path="/entertainment" element={<News key='entertainment' pageSize='6' country='in' category='entertainment'/>} />
            <Route path="/general" element={<News pageSize='6' key='general' country='in' category='general'/>} />
            <Route path="/health" element={<News pageSize='6' key='health' country='in' category='health'/>} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}

