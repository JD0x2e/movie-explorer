import React from "react";
import "../Main/Main.css";

export default function Main({ getMovie, movies, handleChange, showError, review }) {
  return (
    <main className="main">
      {/* <form className="form" onSubmit={getMovie}>
        <input name="title" placeholder={"Title of movie/show"} onChange={handleChange} />
        <button type="submit">Explore!</button>
      </form> */}
      <div className="review-container">
        {review && <h3 className="review">This is a favourite movie of mine too! 😊</h3>}
      </div>
      {showError && <h3 className="error">That is not a valid movie title!</h3>}
      {movies.map((movie, index) => {
        return (
          <div className="movie" key={index}>
            <h2 className="movie-title">{movie.Title}</h2>
            <span className="movie-plot-container">
              <p className="movie-plot">{movie.Plot}</p>
            </span>
            <img className="movie-poster" src={movie.Poster} alt={movie.Title} />
            <p className="movie-actors">{movie.Actors}</p>
          </div>
        );
      })}
    </main>
  );
}
