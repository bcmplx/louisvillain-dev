import React from 'react';
import './App.css';

import Home from './pages';
import Welcome from './components/WelcomeSection';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router className="App">
      <Welcome />
			<Home/>
		</Router>
  );
}

export default App;


