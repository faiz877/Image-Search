import { useState } from "react";
import "../App.css";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          className="search-bar"
          value={term}
          onChange={handleChange}
          type="text"
        />
      </form>
    </div>
  );
}

export default SearchBar;
