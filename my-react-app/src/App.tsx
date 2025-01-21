import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateNote from './pages/CreateNote';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/create-note" component={CreateNote} />
        {/* Add other routes here as needed */}
      </Switch>
    </Router>
  );
};

export default App;