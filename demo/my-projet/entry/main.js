import React, {Component} from 'react';

import ReactDom from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducer from '../pages/page1/reducers';

import Home from '../pages/page1/container';


const store = createStore(reducer);


class Root extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Provider store={store}>
				<Home />
			</Provider>
		);
	}
}


ReactDom.render(<Root/>, document.getElementById('root'));
