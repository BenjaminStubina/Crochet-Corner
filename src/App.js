import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import UsPage from './pages/UsPage/UsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/US' element={<UsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
