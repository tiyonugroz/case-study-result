import React from "react";
import {
	List,
} from 'semantic-ui-react';

const RegistrationResult = ({ registration }) => {
	return (
		<List bulleted>
			<List.Item>Nama: {registration.nama}</List.Item>
			<List.Item>Alamat: {registration.alamat}</List.Item>
			<List.Item>Tanggal Lahir: {registration.tglLahir}</List.Item>
			<List.Item>Nomor Telepon: {registration.noTelepon}</List.Item>
			<List.Item>E-Mail: {registration.email}</List.Item>
		</List>
	)
}

export default RegistrationResult;