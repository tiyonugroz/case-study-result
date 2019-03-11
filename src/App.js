import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import TabBarContainer from './components/tabs/TabBarContainer';
import RegistrationPage from './components/pages/RegistrationPage';
import AutoAdjustPage from './components/pages/AutoAdjustPage';

class App extends Component {
  render() {
    const tabs = [
      { name: 'registration', label: 'Registration', component : RegistrationPage },
      { name: 'autoAdjust', label: 'Auto Adjust', component : AutoAdjustPage }
    ];

    return (
      <Container text>
        <TabBarContainer tabs={tabs} />
      </Container>
    );
  }
}

export default App;
