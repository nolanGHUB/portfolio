import React from 'react';
import './App.css';

//custom components
import Header from './components/Header'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import Technologies from './components/Technologies'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Portfolio />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;
