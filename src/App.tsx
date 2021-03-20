import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppNav from './NavBar/AppNav';
import { Router } from './router/router';


function App() {
  return (
    <div className="App">
      <AppNav/>
      <Router/>
    </div>
  );
}

export default App;
