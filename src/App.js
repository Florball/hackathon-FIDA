import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Nav from './components/Nav'
import Button from './components/Button'
import Grid from './components/Grid'
import Modal from './components/Modal'
import List from './components/List'

function App() {
  return (
    <div className="App">
     
      <Nav/>
      <Button/>
      <Grid/>
      <Modal/>
      <List/>
    </div>
  );
}

export default App;
