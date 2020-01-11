import React from 'react';
import './App.css';

//custom components
import Header from './components/Header'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import Technologies from './components/Technologies'
import About from './components/About'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <About />
        <Portfolio
          portfolioList={this.state.portfolioList}
        />
        <Technologies
          techList={this.state.techList}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
