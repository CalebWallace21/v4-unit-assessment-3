import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
import Header from './Components/Header';
import Booklist from './Components/Booklist.js';
import Shelf from './Components/Shelf';
import SearchBar from './Components/SearchBar'



function App(){
  return(
  <div className='App'>
      <Header />
      <SearchBar />
      <section className="seperator">
      <Booklist />
      <Shelf />
      </section>
  </div>
  )
}

export default App;
