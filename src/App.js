import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Calendar from './components/calendar/calendar';

function App() {
  return (
    <Router>
      <Fragment>
        <p>Welcome to your calendar~</p>

        <Route exact path='/calendar' component={Calendar} />
      </Fragment>
    </Router>
  );
}

export default App;
