import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import UsPage from './pages/UsPage/UsPage';
import UkPage from './pages/UkPage/UkPage';
import StitchPage from './pages/StitchPage/StitchPage';
import FavouritesPage from './pages/FavouritesPage/FavouritesPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const path = window.location.pathname.split('/stitch/')
  const idInUrl = path?.length > 0  ? path[1] : ''

  const [needUpdate, setNeedUpdate] = useState(0);
  const [stitches, setStitches] = useState();
  const [selectedStitch, setSelectedStitch] = useState();
  
  // Persists the selected stitch based on the selected stitch ID in the URL to prevent crashing on page refresh
  useEffect(() => {
    if (stitches && idInUrl) {
      setSelectedStitch(stitches.find(stich => stich.id === idInUrl))
    }
  },[stitches, idInUrl])

  // fecting stitch list from JSON file
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
  },[needUpdate])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/US' element={<UsPage stitches={stitches} setNeedUpdate={setNeedUpdate} setSelectedStitch={setSelectedStitch} />} />
        <Route path='/UK' element={<UkPage stitches={stitches} setNeedUpdate={setNeedUpdate} setSelectedStitch={setSelectedStitch} />} />
        <Route path='/stitch/:id' element={<StitchPage stitch={selectedStitch} />} />
        <Route path='/favourites' element={<FavouritesPage setNeedUpdate={setNeedUpdate} setSelectedStitch={setSelectedStitch} />} />
        <Route path='/projects' element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
