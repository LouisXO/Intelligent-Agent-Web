import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Home from "./Home";
import NavBar from "./NavBar";
import Functionality from "./Functionality";



<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="app-container">
          <NavBar/>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/functionality" element={<Functionality />} />
            <Route path="*" element={<Navigate to="/home" replace />}/>


          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
