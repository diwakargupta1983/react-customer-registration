import React, { Component } from 'react';
import './TopNavigation.css';

class TopNavigation extends Component {



	render() {
		return (
			<div className={`topNavigation`}>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/view1">View 1</a></li>
                <li><a href="/view2">View 2</a></li>
              </ul>
            </div>
		);
	}
}

export default TopNavigation;