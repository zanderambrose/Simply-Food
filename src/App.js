import './App.css';
import Navbar from './Components/Navigation/Navbar'
// import LandingPage from './Components/LandingPage/LandingPage'
// import Pantry from './Components/Pantry/Pantry'
// import GetInspired from './Components/GetInspired/GetInspired'
import Cocktail from './Components/Cocktail/Cocktail'

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Pantry />
      <LandingPage />
      <GetInspired /> */}
      <Cocktail />
    </div>
  );
}

export default App;
