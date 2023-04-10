import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import UsPage from './pages/UsPage/UsPage';
import UkPage from './pages/UkPage/UkPage';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [stitches, setStitches] = useState();

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
        <Route path='/US' element={<UsPage stitches={stitches} />} />
        <Route path='/UK' element={<UkPage stitches={stitches} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
