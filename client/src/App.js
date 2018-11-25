import React, { Component } from 'react';
import CreateProfile from './components/container/CreateProfile'
import ProfileCard from './components/presentation/ProfileCard'
import ViewPofile from './components/presentation/ViewProfile'
class App extends Component {
  render() {
    return (
      <div>
 <CreateProfile />
      </div>
    );
  }
}

export default App;
