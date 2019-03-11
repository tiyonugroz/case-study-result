import React, { Component } from "react";
import {
	Image,
} from 'semantic-ui-react';

class AutoAdjustForm extends Component {
	state = {
		file: null
	}

	handleChange = (e) => {
		this.setState({
			file: URL.createObjectURL(e.target.files[0])
		})
	}

	render() {

		return (
			<div>
				<label htmlFor="file" className="ui icon button">
					<i className="file icon"></i>
					Open File</label>
				<input
					type="file"
					id="file"
					accept="image/*"
					style={{ display: 'none' }}
					onChange={this.handleChange}
				/>
				<Image
					src={this.state.file === null ? 'https://react.semantic-ui.com/images/wireframe/white-image.png' : this.state.file}
					size='large'
					bordered
					style={{ marginTop: '1em', marginBottom: '3em' }}
				/>
			</div>
		);
	}
}

export default AutoAdjustForm;