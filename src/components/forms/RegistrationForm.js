import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import InlineError from "../messages/InlineError";
import validateInput from '../../validations/registration';
import {
	Form,
	Button,
} from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';
import { addRegistration } from '../../actions/registration';

class RegistrationForm extends Component {
	state = {
		data: {
			nama: '',
			alamat: '',
			tglLahir: '',
			noTelepon: '',
			email: ''
		},
		errors: {}
	};

	handleChange = (e, { name, value }) => {
		if (this.state.data.hasOwnProperty(name)) {
			let errors = Object.assign({}, this.state.errors);
			delete errors[name];
			this.setState({
				data: {
					...this.state.data,
					[name]: value,
				},
				errors
			});
		}
	}

	isValid() {
		const { errors, isValid } = validateInput(this.state.data);

		if (!isValid) {
			this.setState({ errors });
		}

		return isValid;
	}

	handleSubmit = e => {
		e.preventDefault();
		if (this.isValid()) {
			this.setState({
				data: {
					nama: '',
					alamat: '',
					tglLahir: '',
					noTelepon: '',
					email: ''
				},
				errors: {}
			});
			this.props.addRegistration(this.state.data);
		}
	};

	render() {
		const { data, errors } = this.state;

		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Field>
					<Form.Input
						type="text"
						label="Nama"
						name="nama"
						placeholder="Nama"
						value={data.nama}
						onChange={this.handleChange}
						style={errors.nama && { marginBottom: '-1em' }}
						error={!!errors.nama}
					/>
					{errors.nama && <InlineError text={errors.nama} />}
				</Form.Field>
				<Form.Field>
					<Form.Input
						type="text"
						label="Alamat"
						name="alamat"
						placeholder="Alamat"
						value={data.alamat}
						onChange={this.handleChange}
						style={errors.alamat && { marginBottom: '-1em' }}
						error={!!errors.alamat}
					/>
					{errors.alamat && <InlineError text={errors.alamat} />}
				</Form.Field>
				<Form.Field>
					<DateInput
						name="tglLahir"
						label="Tanggal Lahir"
						placeholder="Tanggal Lahir"
						value={data.tglLahir}
						iconPosition="left"
						popupPosition="bottom right"
						onChange={this.handleChange}
						style={errors.tglLahir && { marginBottom: '-1em' }}
						error={!!errors.tglLahir}
					/>
					{errors.tglLahir && <InlineError text={errors.tglLahir} />}
				</Form.Field>
				<Form.Field>
					<Form.Input
						type="text"
						label="Nomor Telepon"
						name="noTelepon"
						placeholder="Nomor Telepon"
						value={data.noTelepon}
						onChange={this.handleChange}
						style={errors.noTelepon && { marginBottom: '-1em' }}
						error={!!errors.noTelepon}
					/>
					{errors.noTelepon && <InlineError text={errors.noTelepon} />}
				</Form.Field>
				<Form.Field>
					<Form.Input
						type="text"
						label="E-Mail"
						name="email"
						placeholder="E-Mail"
						value={data.email}
						onChange={this.handleChange}
						style={errors.email && { marginBottom: '-1em' }}
						error={!!errors.email}
					/>
					{errors.email && <InlineError text={errors.email} />}
				</Form.Field>
				<Button type='submit' color='blue'>Submit</Button>
			</Form>
		);
	}
}

RegistrationForm.propTypes = {
	addRegistration: PropTypes.func.isRequired
};

const mapDispatch = {
	addRegistration,
};

export default connect(null, mapDispatch)(RegistrationForm);