import React, {Component} from 'react';

import './index.less';

import BaseComponent from '../../../BaseComponent';

import PageBanner from '../components/PageBanner';

class Page1 extends BaseComponent {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<PageBanner />
		);
	}
}

export default Page1;