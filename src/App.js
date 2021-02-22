import './App.scss';
import Login from './pages/Login/Login';
import BasicLayout from './layouts/BasicLayout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login></Login>
          </Route>
          <Route path="/home">
            <BasicLayout /> 
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
