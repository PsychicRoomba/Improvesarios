import React from 'react';

import { About, Footer, Header, Performers, Upcoming } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
      <div className="app">
        <Navbar />
        <Header />
        <About /> 
        <Performers />
        <Upcoming />
        <Footer />
      </div>
    )
};

export default App;