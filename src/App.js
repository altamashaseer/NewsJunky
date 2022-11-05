import './App.css';
import React, {useState} from 'react'
import Navbar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


const App =()=> {
//  const apiKey= process.env.REACT_APP_NEWSJUNKY_APIKEY;
 const apiKey= 'a5f3393545fd4b20884742f948acce53';
  
  const [progress, setProgress] = useState(0)

    return (
      <>
        <BrowserRouter>
          <LoadingBar color='#f11946' progress={progress}/>
          <Navbar /> 
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey}  key='home' pageSize='6' country='in' category='general' />} />
            <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  key='science' pageSize='6' country='in' category='science' />} />
            <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key='sports' pageSize='6' country='in' category='sports' />} />
            <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  key='technology' pageSize='6' country='in' category='technology' />} />
            <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  key='business' pageSize='6' country='in' category='business' />} />
            <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  key='entertainment' pageSize='6' country='in' category='entertainment' />} />
            <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize='6' key='general' country='in' category='general' />} />
            <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize='6' key='health' country='in' category='health' />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }

export default App;
