import React, { Component } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuAppBar from './App-bar/MenuAppBar';

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