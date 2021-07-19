import './App.css';
import Navbar from './Components/Navigation/Navbar'
import Footer from './Components/Footer/Footer'
import LandingPage from './Components/LandingPage/LandingPage'
import Pantry from './Components/Pantry/Pantry'
import GetInspired from './Components/GetInspired/GetInspired'
import JoinTheFamily from './Components/JoinTheFamily/JoinTheFamily'
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
            <Route path="/signup">
              <JoinTheFamily />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
