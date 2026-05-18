import './SortButtons.css';

const SortButtons = ({ onSortBy }) => {
  return (
    <div className="sort-buttons">
      <button type="button" onClick={() => onSortBy('title')}>
        Sortera efter titel
      </button>
      <button type="button" onClick={() => onSortBy('rating')}>
        Sortera efter betyg
      </button>
    </div>
  );
};
export default SortButtons;
