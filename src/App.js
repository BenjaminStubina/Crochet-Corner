import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import UsPage from './pages/UsPage/UsPage';
import UkPage from './pages/UkPage/UkPage';
import StitchPage from './pages/StitchPage/StitchPage';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [stitches, setStitches] = useState();
  const [selectedStitch, setSelectedStitch] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        let {data} = await axios.get("http://localhost:8080/");
        setStitches(data);
        console.log(data);
      }
      catch {
        console.log("Error 404")
      }
    }

    fetchData();
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/US' element={<UsPage stitches={stitches} setSelectedStitch={setSelectedStitch} />} />
        <Route path='/UK' element={<UkPage stitches={stitches} setSelectedStitch={setSelectedStitch} />} />
        <Route path='/:id' element={<StitchPage stitch={selectedStitch}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
