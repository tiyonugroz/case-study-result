import React, { Component } from "react";
import PropTypes from "prop-types";
import TabBar from "./TabBar";

class TabBarContainer extends Component {
	state = {
		activeItem: this.props.tabs[0].name
	}

	handleItemClick = (name) => {
		this.setState({ activeItem: name });
	}

	render() {
		const { tabs } = this.props;
		const { activeItem } = this.state;

		return (
			<TabBar
				tabs={tabs}
				activeItem={activeItem}
				handleItemClick={this.handleItemClick}
			/>
		)
	}
}

TabBarContainer.propTypes = {
	tabs: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
	})).isRequired,
};

export default TabBarContainer;