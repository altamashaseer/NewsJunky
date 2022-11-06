import React, { useState } from 'react'
import Navbar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';



const App = () => {
  //  const apiKey= process.env.REACT_APP_NEWSJUNKY_APIKEY;
  const apiKey = '4tGQBLTN3FcvHJyY6WxPqssJ8JscbGiJ';
  const [progress, setProgress] = useState(0)

  return (
    <>
      <BrowserRouter>
        <LoadingBar color='#f11946' progress={progress} />
        <Navbar />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key='home' pageSize='6' country='in' query='general' />} />
          <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key='science' pageSize='6' country='in' query='science' />} />
          <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize='6' country='in' query='sports' />} />
          <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize='6' country='in' query='technology' />} />
          <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key='business' pageSize='6' country='in' query='business' />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize='6' country='in' query='entertainment' />} />
          <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize='6' key='health' country='in' query='health' />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
