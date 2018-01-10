
import React, {Component} from 'react';
import {render} from 'react-dom';

import './index.less';

class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>这里可以写一个组件</div>
		);
	}
}


render(<Home/>, document.getElementById('root'));