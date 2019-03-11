import React from "react";
import PropTypes from "prop-types";
import ToggleDisplay from "react-toggle-display";
import { Menu } from "semantic-ui-react";

import Tab from "./Tab";

const TabBar = (props) => {
	const { tabs, activeItem, handleItemClick } = props;

	const tabItems = tabs.map(tabInfo => {
		const { name, label } = tabInfo;

		return (
			<Tab
				key={name}
				name={name}
				label={label}
				active={activeItem === name}
				handleItemClick={handleItemClick}
			/>
		);
	});

	const tabPanels = tabs.map(tabInfo => {
		const { name, component: TabComponent } = tabInfo;

		return (
			<ToggleDisplay show={name === activeItem} key={name}>
				<TabComponent />
			</ToggleDisplay>
		)
	});

	return (
		<div>
			<Menu pointing secondary>
				{tabItems}
			</Menu>

			{tabPanels}
		</div>
	)
}

TabBar.propTypes = {
	tabs: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		component: PropTypes.func.isRequired,
	})).isRequired,
	activeItem: PropTypes.string.isRequired,
	handleItemClick: PropTypes.func.isRequired,
};

export default TabBar;