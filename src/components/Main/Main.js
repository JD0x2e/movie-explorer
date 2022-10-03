import React from "react";
import "../Main/Main.css";

export default function Main({ getMovie, movie, handleChange }) {
  return (
    <main className="main">
      <form className="form" onSubmit={getMovie}>
        <input name="title" placeholder={"Title of movie/show"} onChange={handleChange} />
        <button>Explore!</button>
      </form>
      <div className="movie">
        <h1 className="movie-title">{movie.Title}</h1>
        <p className="movie-plot">{movie.Plot}</p>
        <img className="movie-poster" src={movie.Poster} alt={movie.Title} />
        <p className="movie-actors">{movie.Actors}</p>
      </div>
    </main>
  );
}
