import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<CssBaseline />
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
