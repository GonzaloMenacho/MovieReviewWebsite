import Button from "../Button";
import { useState } from "react";

function AdvancedPopup() {
  const [formData, setFormData] = useState({
    movie: "",
    review: "",
    min: "",
    max: "",
  });

  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // do something with form data
  }

  function handleClearForm() {
    setFormData({
      movie: "",
      review: "",
      min: "",
      max: "",
    });
  }

  return (
    <div className="popup">
      <form>
        <h1>Advanced Search</h1>
        Movie Title: 
        <input
          className="movie-search"
          type="text"
          name="movie"
          value={formData.movie}
          onChange={handleChange}
        />
        <br></br>
        Reviews:
        <input
          className="review-search"
          type="text"
          name="review"
          value={formData.review}
          onChange={handleChange}
        />

        <div>
          <button
            className="filter-btn"
            type="button"
            onClick={() => setIsFiltersVisible(!isFiltersVisible)}
          >
            {isFiltersVisible ? "Hide Filters" : "Filters"}
          </button>
          {isFiltersVisible && (
            <div className="filters">
              
              <p>Content Rating</p>
              <Button name="G"></Button>
              <Button name="PG"></Button>
              <Button name="PG-13"></Button>
              <Button name="R"></Button>
              <Button name="NC-17"></Button>
              <Button name="Not Rated"></Button>
              <Button name="Unrated"></Button>
              <p>Genre</p>
              <Button name="Action"></Button>
              <Button name="Horror"></Button>
              <Button name="Romance"></Button>
              <Button name="Drama"></Button>
              <Button name="Thriller"></Button>
              <Button name="Comedy"></Button>
              <br/>
              Rating Score: &nbsp;
              <input
                className="min"
                type="text"
                placeholder="Min"
                name="min"
                value={formData.min}
                onChange={handleChange}
              />{" "}
              -{" "}
              <input
                className="max"
                type="text"
                placeholder="Max"
                name="max"
                value={formData.max}
                onChange={handleChange}
              />
            </div>
          )}
        </div>

        <div className="sumbit-clear">
          <button>Search</button>
          <button type="button" onClick={handleClearForm}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdvancedPopup;
