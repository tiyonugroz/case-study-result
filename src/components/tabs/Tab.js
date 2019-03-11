import React from "react";
import PropTypes from "prop-types";
import { Menu } from "semantic-ui-react";

const Tab = (props) => {
	const { name, label, active, handleItemClick } = props;

	return (
		<Menu.Item
			name={name}
			label={label}
			active={active}
			onClick={() => handleItemClick(name)}
		/>
	)
}

Tab.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	active: PropTypes.bool.isRequired,
	handleItemClick: PropTypes.func.isRequired,
};

export default Tab;