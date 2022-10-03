import "./App.css";
import axios from "axios";
import { useState } from "react";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export default function App() {
  const [movie, setMovie] = useState({});
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
    setMovie(res.data);
  };

  return (
    <div className="App">
      <Header />
      <Main getMovie={getMovie} handleChange={handleChange} movie={movie} />
      <Footer />
    </div>
  );
}
