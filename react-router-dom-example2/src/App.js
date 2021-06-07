import React, { useState} from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <button>Login</button>
        <button>Logout</button>
      </Route>
    </Router>  
  );
}

export default App;
