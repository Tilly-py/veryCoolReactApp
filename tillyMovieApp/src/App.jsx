import { useState } from 'react';
import MovieForm from './components/MovieForm/MovieForm';
import MovieList from './components/movieList/MovieList';
import SortButtons from './components/SortButtons/SortButtons';

function App() {
  const [movies, setMovies] = useState([]);
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const removeMovie = (titleToRemove) => {
    setMovies(movies.filter((movie) => movie.title !== titleToRemove));
  };

  const [sortBy, setSortBy] = useState('');
  const sortMovies = [...movies].sort((a, b) => {
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    }
    if (sortBy === 'rating') {
      return Number(b.rating) - Number(a.rating);
    }
    return 0;
  });

  return (
    <>
      <main>
        <div className="App glass-card">
          <h1>Welcome to Tilly Movie Site</h1>
          <MovieForm onSubmit={addMovie} />
          <SortButtons onSortBy={setSortBy} />
          <MovieList movies={sortMovies} onRemoveMovie={removeMovie} />
        </div>
      </main>
    </>
  );
}
export default App;
