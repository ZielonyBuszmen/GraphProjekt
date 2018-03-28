import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';

const App = () => (
  <div>
    <header>
      Nagłówek
    </header>

    <main>
      <Home/>
    </main>
  </div>
);

export default App;