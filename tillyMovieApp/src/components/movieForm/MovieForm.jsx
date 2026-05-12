import './MovieForm.css';

const MovieForm = () => {
  return (
    <div className="add-movie">
      <h2>Add Movie</h2>
      <form>
        <div className="form-group">
          <label htmlFor="title">Titel</label>
          <input type="text" id="title" name="title" />
          <label htmlFor="rating">Rating</label>
          <select id="rating" name="rating">
            <option value="">Ge filmen ett betyg</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button type="submit">
            Lägg till film
          </button>
        </div>
      </form>
    </div>
  );
};

export default MovieForm;
