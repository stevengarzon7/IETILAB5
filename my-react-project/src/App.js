import React from 'react';
import './App.css';
import Connect from "./components/connect";
import Loby from "./components/loby"
import Login from './components/login';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
            <Route path="/Login" element={<Login></Login>} />
        </Routes>
        <Routes>
            <Route path="/Conectar/:email/:password" element={<Connect></Connect>}>  </Route>
        </Routes>
        <Routes>
            <Route path="/Loby" element={<Loby></Loby>}>  </Route>
        </Routes>

    </div>
  </Router>
);
}

export default App;