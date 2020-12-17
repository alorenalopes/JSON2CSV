import './App.css';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Table from './views/Table';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/table/:codeCSV" component={Table} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
