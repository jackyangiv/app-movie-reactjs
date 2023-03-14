import React, { useState, useEffect } from "react";
import classes from "./Original.module.css";
import DetailContext from "./store/detail-context";
import { useContext } from "react";
const Original = (props) => {
  const [original, setOriginal] = useState([]);
  const detailCtx = useContext(DetailContext);
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
  useEffect(() => {
    const fetchMeals = async (type) => {
      const response = await fetch(
        `https://api.themoviedb.org/3${type}`

        // "https://api.themoviedb.org/3/movie/550?api_key=a4ae14e6dc40d4017e61df4a11712f48"
        // "https://api.themoviedb.org/3/trending/all/week?api_key=a4ae14e6dc40d4017e61df4a11712f48&language=en-US"
      );
      const responseData = await response.json();
      setOriginal(responseData.results);
      detailCtx.data.push(responseData.results);
    };
    fetchMeals(requests.fetchNetflixOriginals);
  }, []);
  const [srcURL, setSrcURL] = useState("");
  const btnDetail = (e) => {
    console.log(e.target.getAttribute("src"));
    setSrcURL(e.target.getAttribute("src"));
    detailCtx.items.push(e.target.getAttribute("src"));
    // props.onDetail(e.target.getAttribute("src"));
  };
  const dataList = original.filter(
    (img) => srcURL === `https://image.tmdb.org/t/p/original${img.poster_path}`
  );

  return (
    <div className="container-fluid">
      <div
        id="carouselExampleControls5"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-start">
              {original.slice(0, 10).map((img) => (
                <div
                  onClick={props.onClick}
                  key={img.id}
                  className={classes.bump}
                >
                  <a onClick={btnDetail}>
                    <img
                      key={img.id}
                      className={classes.imgoriginal}
                      src={`https://image.tmdb.org/t/p/original${img.poster_path}`}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-start">
              {original.slice(10, 20).map((img) => (
                <div
                  onClick={props.onClick}
                  key={img.id}
                  className={classes.bump}
                >
                  <a onClick={btnDetail}>
                    <img
                      key={img.id}
                      className={classes.imgoriginal}
                      src={`https://image.tmdb.org/t/p/original${img.poster_path}`}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          // class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls5"
          data-bs-slide="prev"
        >
          <span aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          // className="carousel-control-nex"
          type="button"
          data-bs-target="#carouselExampleControls5"
          data-bs-slide="next"
        >
          <span
            //  class="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Original;
