import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Calendar from './components/calendar/calendar';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Route exact path='/calendar' component={Calendar} />
        </a>
      </header>
    </div>
  );
}

export default App;
