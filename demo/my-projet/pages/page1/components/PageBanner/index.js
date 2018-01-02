import React, {Component} from 'react';

import './index.less';

import BannerImage from './components/BannerImage';


class PageBanner extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<BannerImage />
		);
	}
}

export default PageBanner;