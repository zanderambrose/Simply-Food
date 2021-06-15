import './App.css';
import Navbar from './Components/Navigation/Navbar'
// import LandingPage from './Components/LandingPage/LandingPage'
import Pantry from './Components/Pantry/Pantry'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Pantry />
      {/* <LandingPage /> */}
    </div>
  );
}

export default App;
