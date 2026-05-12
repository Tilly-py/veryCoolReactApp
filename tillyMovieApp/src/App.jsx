import MovieForm from './components/movieForm/MovieForm';
import GlassMorph from './components/GlassMorph/GlassMorph';
import MovieList from './components/movieList/MovieList';
function App() {
  return (
    <>
      <GlassMorph />
      <main>
        <div className="App glass-card">
          <h1>Welcome to Tilly Movie Site</h1>
          <MovieForm />
          <MovieList />
        </div>
      </main>
    </>
  );
}
export default App;
