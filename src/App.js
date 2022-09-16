import './App.css';
import React, { Component } from 'react'
import Navbar from './components/NavBar';
import News from './components/News';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar /> {/* camel case mandetory */}
          <Routes>
            <Route path="/" element={<News pageSize='6' country='in' category='science' />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}

