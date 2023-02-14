import './App.css';
import NavBar from './Components/NavBar';
import Info from './Components/Info';
import Movie from './Components/Movie';

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
      <NavBar/>

      <div className="previousMovies">{movies}</div>
    </div>
  );
}

export default App;
