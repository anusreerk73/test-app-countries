import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Home from './container/home';
import CountryList from './components/country-list';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact component={Home} path="/"  ></Route>
        <Route exact component={CountryList} path="/countrylist"></Route>
      </Switch>
    </Router>
  );
}

export default App;
