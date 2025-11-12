import React, { useState } from "react";
import { getCurrentUser } from "../../api/auth";
import { useEffect } from "react";
import { getAllMovie } from "../../api/movieCall";

const Home = () => {
  const [movies, setMovies] = useState(null);
  const getUserData = async () => {
    const response = await getCurrentUser();
    const movie = await getAllMovie();

    console.log(movie);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return <div>Home</div>;
};

export default Home;
