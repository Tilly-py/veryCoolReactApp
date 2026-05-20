import './MovieList.css';

const MovieList = ({ movies, onRemoveMovie }) => {
  return (
    <div className="movie-container">
      <h2>Dina Filmer</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <div className="movie-list-item" key={movie.title}>
            <div className="movie-content">
              <h3>{movie.title}</h3>
              <div className="movie-images">
                <img
                  src="src/assets/remove.png"
                  alt="Remove"
                  className="remove-button"
                  onClick={() => {
                    onRemoveMovie(movie.title);
                  }}
                />
                {[...Array(Number(movie.rating))].map((_, starIndex) => (
                  <img key={starIndex} src="src/assets/star.png" alt="Rating" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
