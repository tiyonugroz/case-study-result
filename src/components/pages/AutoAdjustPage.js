import React, { Component } from "react";
import {
	Segment,
	Header,
	Divider,
} from 'semantic-ui-react';
import AutoAdjustForm from '../forms/AutoAdjustForm';

class AutoAdjustPage extends Component {
	render() {
		return (
			<Segment>
				<Header as='h2'>Auto Adjust Image</Header>
				<Divider />
				<AutoAdjustForm />
			</Segment>
		);
	}
}

export default AutoAdjustPage;