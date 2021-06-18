import './App.css';
import Navbar from './Components/Navigation/Navbar'
import LandingPage from './Components/LandingPage/LandingPage'
import Pantry from './Components/Pantry/Pantry'
import GetInspired from './Components/GetInspired/GetInspired'
import Cocktail from './Components/Cocktail/Cocktail'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/pantry">
              <Pantry />
            </Route>
            <Route path="/inspired">
              <GetInspired />
            </Route>
            <Route path="/cocktail">
              <Cocktail />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
