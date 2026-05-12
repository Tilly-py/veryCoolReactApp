import './MovieList.css';
const MovieList = () => {
  return (
    <div className="movie-container">
      <h2>Dina Filmer</h2>
      <div className="movie-list">
        <li>
          Film 1 <img src="src/assets/star.png" alt="Rating" />
          <img src="src/assets/remove.png" alt="Remove" />
        </li>
        <li>
          Film 1
          <img src="src/assets/star.png" alt="Rating" />
          <img src="src/assets/remove.png" alt="Remove" />
        </li>
        <li>
          Film 1 <img src="src/assets/star.png" alt="Rating" />
          <img src="src/assets/remove.png" alt="Remove" />
        </li>
        <li>
          Film 1 <img src="src/assets/star.png" alt="Rating" />
          <img src="src/assets/remove.png" alt="Remove" />
        </li>
      </div>
    </div>
  );
};

export default MovieList;
