import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import View1 from './components/View1/View1';
import View2 from './components/View2/View2';

class App extends Component {
  render() {
    return (
    	<Router>
    		<div className="App">
    			<CssBaseline />
        		<Header />
        		<Route path="/" exact component={Home} />
	    		<Route path="/view1" exact component={View1} />
	    		<Route path="/view2" exact component={View2} />
	    		<Footer />
    		</div>
    	</Router>
    );
  }
}

export default App;
