import React from "react";
import { useState, useEffect } from "react";
import classes from "./Banner.module.css";
const Banner = (props) => {
  const API_KEY = "a4ae14e6dc40d4017e61df4a11712f48";
  const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
  };
  const [bannerData, setBannerData] = useState([]);
  useEffect(() => {
    const fetchMeals = async (type) => {
      const response = await fetch(
        `https://api.themoviedb.org/3${type}`

        // "https://api.themoviedb.org/3/movie/550?api_key=a4ae14e6dc40d4017e61df4a11712f48"
        // "https://api.themoviedb.org/3/trending/all/week?api_key=a4ae14e6dc40d4017e61df4a11712f48&language=en-US"
      );
      const responseData = await response.json();
      console.log(
        responseData.results[
          Math.floor(Math.random() * responseData.results.length - 1)
        ]
      );
      const dataList =
        responseData.results[
          Math.floor(Math.random() * responseData.results.length - 1)
        ];
      setBannerData(dataList);
    };
    fetchMeals(requests.fetchNetflixOriginals);
  }, []);

  return (
    <>
      <div className={classes.box}>
        <img
          className="img-fluid"
          src={`https://image.tmdb.org/t/p/original${bannerData.backdrop_path}`}
        />

        <div className={classes.bottom}>
          <div>
            <h1>{bannerData.name}</h1>
            <button className="ms-2 px-3 btn btn-dark">Play</button>
            <span>
              <button className="ms-2 px-3 btn btn-dark">My List</button>
            </span>
            <div className={classes["overflow1"]}>
              <p>{bannerData.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
