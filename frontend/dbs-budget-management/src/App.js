import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Login from './components/Login'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard userId={1} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
