import React, { useState } from 'react'
import Navbar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import About from './components/About';

const App = () => {
  const apiKey = process.env.REACT_APP_NEWSJUNKY_APIKEY;
  // const apiKey = '4tGQBLTN3FcvHJyY6WxPqssJ8JscbGiJ';
  const [progress, setProgress] = useState(0)

  return (
    <>
      <BrowserRouter>
        <LoadingBar color='#f11946' progress={progress} />
        <Navbar />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} />} />
          <Route path="science" element={<News setProgress={setProgress} apiKey={apiKey} />} />
          <Route path="sports" element={<News setProgress={setProgress} apiKey={apiKey} />} />
          <Route path="technology" element={<News setProgress={setProgress} apiKey={apiKey} />} />
          <Route path="business" element={<News setProgress={setProgress} apiKey={apiKey} />} />
          <Route path="entertainment" element={<News setProgress={setProgress} apiKey={apiKey} />} />
          <Route path="health" element={<News setProgress={setProgress} apiKey={apiKey} />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
