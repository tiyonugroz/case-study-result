import React, { Component } from "react";
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import PropTypes from "prop-types";
import {
	Segment,
	Header,
	Divider,
} from 'semantic-ui-react';
import RegistrationForm from '../forms/RegistrationForm';
import RegistrationResult from '../results/RegistrationResult';

class RegistrationPage extends Component {

	render() {
		const { registration } = this.props;

		return (
			<Segment>
				<Header as='h2'>Registration Form</Header>
				<Divider />
				<RegistrationForm />
				{
					!isEmpty(registration) && (
						<div>
							<Divider />
							<RegistrationResult registration={registration} />
						</div>
					)
				}
			</Segment>
		);
	}
}

RegistrationPage.propTypes = {
	registration: PropTypes.shape(PropTypes.string.isRequired).isRequired
};

const mapState = state => ({
	registration: state.registration,
});

export default connect(mapState)(RegistrationPage);