import React from "react";
import "../Header/Header.css";

export default function Header({ getMovie, handleChange }) {
  return (
    <header className="header">
      <h1 className="header-h1">MOVIE EXPLORER 🎬</h1>
      <form className="form" onSubmit={getMovie}>
        <input name="title" placeholder={"Title of movie/show"} onChange={handleChange} />
        <button type="submit">Explore!</button>
      </form>
    </header>
  );
}
