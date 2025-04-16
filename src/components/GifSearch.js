import React, { useState } from "react";

function GifSearch({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(query);
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <label>Enter a Search Term:</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <button className="btn btn-primary mt-2">Find Gifs</button>
    </form>
  );
}

export default GifSearch;
