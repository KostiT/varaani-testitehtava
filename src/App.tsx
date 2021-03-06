import React from 'react';
// import { Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/Home';
import { LoginPage } from './pages/Login';
import { Test } from './pages/Test';
// import { GlobalStateContext, useGlobalState } from './state';
import { AppContext, getStorageData } from './state';
const App: React.FC = () => {
  // const [state, dispatch] = useGlobalState();
  const { state } = React.useContext(AppContext);
	const [isLoaded, setLoaded] = React.useState(state.appLoaded);
	React.useEffect(() => {
		console.log('Loaded', state.appLoaded); // at first time-> false ====>1
		getStorageData(state)
    console.log('=======');
    setLoaded(state.appLoaded); // true
	}, [state]);
  return !isLoaded ? null : (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/home" component={HomePage}></Route>
            <Route path="/next" component={Test}></Route>
            <Route path="/" component={LoginPage}></Route>
          </Switch>
        </Router>
    </div>
  );
};

export default App;
