import React, { Component } from 'react';
import MenuAppBar from './App-bar/MenuAppBar';
import './Header.css';

class Header extends Component {



	render() {
		return (
			<div>
				<MenuAppBar />
			</div>
		);
	}

	componentDidMount() {
    console.log(this);
  };
	
}

export default Header;