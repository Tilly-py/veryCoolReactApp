import './MovieForm.css';
import { useState } from 'react';

const formElements = {
  title: '',
  rating: '',
};
const MovieForm = ({ onSubmit }) => {
  const [inputs, setInputs] = useState(formElements);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      title: inputs.title,
      rating: inputs.rating,
    };
    onSubmit(newMovie);
    setInputs(formElements);
  };

  return (
    <div className="add-movie">
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Titel</label>
          <input
            type="text"
            id="title"
            name="title"
            value={inputs.title}
            onChange={handleInputChange}
          />
          <label htmlFor="rating">Rating</label>
          <select id="rating" name="rating" value={inputs.rating} onChange={handleInputChange}>
            <option value="">Ge filmen ett betyg</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button type="submit">Lägg till</button>
        </div>
      </form>
    </div>
  );
};

export default MovieForm;
