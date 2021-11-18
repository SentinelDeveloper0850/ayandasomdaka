import React from 'react';
// import logo from './images/logo.jpg';
import './App.scss';
import AppBar from './components/appbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/home';

function App() {
  return (
    <Router>
      <div className='App'>
        <AppBar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
