import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import UsPage from './pages/UsPage/UsPage';
import UkPage from './pages/UkPage/UkPage';
import StitchPage from './pages/StitchPage/StitchPage';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const path = window.location.pathname.split('/stitch/')
  const idInUrl = path?.length > 0  ? path[1] : ''

  const [stitches, setStitches] = useState();
  const [selectedStitch, setSelectedStitch] = useState();
  const [favourites, setFavourites] = useState();
  
  useEffect(() => {
    if (stitches && idInUrl) {
      setSelectedStitch(stitches.find(stich => stich.id === idInUrl))
    }
  },[stitches, idInUrl])

  useEffect(() => {
    async function fetchData() {
      try {
        let {data} = await axios.get("http://localhost:8080/");
        setStitches(data);
      }
      catch {
        console.log("Error 404")
      }
    }

    fetchData();
  },[])

  useEffect(() => {
    async function fetchFavourites() {
      try {
        let {data} = await axios.get("http://localhost:8080/");
        setFavourites(data);
      }
      catch {
        console.log("Error 404")
      }
    }

    fetchFavourites();
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/US' element={<UsPage stitches={stitches} setSelectedStitch={setSelectedStitch} />} />
        <Route path='/UK' element={<UkPage stitches={stitches} setSelectedStitch={setSelectedStitch} />} />
        <Route path='/stitch/:id' element={<StitchPage stitch={selectedStitch}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
