import { useState } from 'react';
import MovieForm from './components/MovieForm/MovieForm';
import GlassMorph from './components/GlassMorph/GlassMorph';
import MovieList from './components/movieList/MovieList';
function App() {
  const [movies, setMovies] = useState([]);
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };
  return (
    <>
      <GlassMorph />
      <main>
        <div className="App glass-card">
          <h1>Welcome to Tilly Movie Site</h1>
          <MovieForm onSubmit={addMovie} />
          <MovieList movies={movies} />
        </div>
      </main>
    </>
  );
}
export default App;
