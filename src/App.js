import './App.css';
import Navbar from './Components/Navigation/Navbar'
// import LandingPage from './Components/LandingPage/LandingPage'
// import Pantry from './Components/Pantry/Pantry'
import GetInspired from './Components/GetInspired/GetInspired'

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Pantry /> */}
      {/* <LandingPage /> */}
      <GetInspired />
    </div>
  );
}

export default App;
