import React, { PureComponent } from 'react';
import './App.scss';

import Grid from './components/Grid';

class App extends PureComponent {

  render() {
    return (
      <div className="App">
        <Grid />
      </div>
    );
  }
}

export default App;
