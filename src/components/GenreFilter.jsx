import React from "react";

const GenreFilter = ({genres,handleFormSubmit}) => {
  return (
    <div className="card-container">
      <h2>Filter by Genre</h2>
      <div>
        {genres.map((item, index) => (
          <button key={index} onClick={() => handleFormSubmit(item)}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreFilter;
