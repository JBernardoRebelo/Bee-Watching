import './App.css';
import NavBar from './Components/NavBar';
import Info from './Components/Info';
import Movie from './Components/Movie';
import CurrentMovie from './Components/CurrentMovie';
import PreviousMovies from './Components/PreviousMovies';

function App() {

  const movies = Info.map(item => {
    return(
      <Movie
        title = {item.title}
        coverImg = {item.coverImg}
        year = {item.year}
        moviePicker = {item.moviePicker}
        genres = {item.genres}
        duration = {item.duration}
        rate = {item.rate}
    />
    )
  })

  return (
    <div className="App">
      {/* Navbar showcase */}
      <NavBar/>

      {/* Selected Movie */}
      <div>
        {CurrentMovie(movies[4])}
      </div>

      {/* Movie instances layout */}
      <div>
        {/* {movies} */}
        {PreviousMovies(movies)}
      </div>
    </div>
  );
}

export default App;
