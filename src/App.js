import './App.css';
import NavBar from './Components/NavBar';
import Movie from './Components/Movie';

function App() {

  return (
    <div className="App">
      {/* Navbar showcase */}
      <NavBar/>

     
      <div>
        <Movie />
      </div>

      
    </div>
  );
}

export default App;
