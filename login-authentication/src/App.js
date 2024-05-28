import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Landing from './components/Landing'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (email, password) => {
    if (email === "happy20@gmail.com" && password === "Happy123") {
      setIsAuthenticated(true);
      return true;
    } else {
      setIsAuthenticated(false);
      return false;
    }
  };

  return (
    <Router>
      <Switch>
        <Route path="/">
          <Landing />
        </Route>
        <Route>
           <Login path="/login" handleLogin={handleLogin} />
        </Route>
        <PrivateRoute path="/dashboard" isAuthenticated={isAuthenticated}>
          <Dashboard />
        </PrivateRoute>
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
}

function PrivateRoute({ children, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default App;
