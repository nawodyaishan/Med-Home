import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Contact from './Contact';

const App = () => {
  return (
    <div style={styles.app}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

const styles = {
  app: {
    padding: 50
  }
}

//form action="/"