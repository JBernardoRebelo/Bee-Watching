import './App.css';
import NavBar from './Components/NavBar';
import Movie from './Components/Movie';

function App() {

  return (
    <div className="App">
      {/* Navbar showcase */}
      <NavBar/>

      {/* Current Movie */}
      <h2> Current Movie </h2>
      <div>
        <Movie isCurrent={true}/>
      </div>

      {/* Movie instances layout */}
      <h2> Previous Movies </h2>
      <div className="previousMovies">

        <Movie isCurrent={false}/>
      </div>
    </div>
  );
}

export default App;
