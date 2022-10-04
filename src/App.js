import "./App.css";
import axios from "axios";
import { useState } from "react";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export default function App() {
  const [showError, setShowError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [form, setForm] = useState({
    title: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const getMovie = async (e) => {
    e.preventDefault();
    const API = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${form.title}`;
    const res = await axios.get(API);

    if (res.data.Error !== "Movie not found!") {
      const tempMovies = [...movies];
      tempMovies.unshift(res.data);

      // keeps only 3 movies on screen
      if (tempMovies.length > 3) {
        tempMovies.pop();
      }
      setShowError(false);
      setMovies(tempMovies);
    } else {
      // handle error
      setShowError(true);
    }
  };

  return (
    <div className="App">
      <Header />
      <Main getMovie={getMovie} handleChange={handleChange} movies={movies} showError={showError} />
      <Footer />
    </div>
  );
}
