import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
	let errors = {};

	if (Validator.isEmpty(data.nama)) {
		errors.nama = 'This field is required';
	}
	if (Validator.isEmpty(data.alamat)) {
		errors.alamat = 'This field is required';
	}
	if (Validator.isEmpty(data.tglLahir)) {
		errors.tglLahir = 'This field is required';
	}
	if (Validator.isEmpty(data.noTelepon)) {
		errors.noTelepon = 'This field is required';
	} else if (!Validator.isInt(data.noTelepon)) {
		errors.noTelepon = 'Number is invalid';
	} else if (data.noTelepon.length < 10 || data.noTelepon.length > 12) {
		errors.noTelepon = 'Number should be in 10 - 12 digits';
	}
	if (Validator.isEmpty(data.email)) {
		errors.email = 'This field is required';
	} else if (!Validator.isEmail(data.email)) {
		errors.email = 'E-mail is invalid';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	}
}
