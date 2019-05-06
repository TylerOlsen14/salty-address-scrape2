import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import AddressScrape from './components/AddressScrape';
import PostAddress from './components/PostAddress';


function App() {
  return (
    <div className="App">
      <NavBar />
      <AddressScrape />
      <PostAddress />
    </div>
  );
}

export default App;
