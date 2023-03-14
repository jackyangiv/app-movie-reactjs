import Modal from "../../../components/UI/Modal";
import { useContext, useState, useEffect } from "react";
import DetailContext from "./store/detail-context";
import classes from "./Detail.module.css";

const Detail = (props) => {
  const detailCtx = useContext(DetailContext);
  const [youtube, setYoutube] = useState([]);
  const [key, setKey] = useState("");
  const dataList = detailCtx.data.flat();
  const abc = dataList.filter(
    (img) =>
      `https://image.tmdb.org/t/p/original${img.poster_path}` ===
      detailCtx.items.toString()
  );
  console.log(abc[0].id);
  useEffect(() => {
    const fetchMeals = async (type) => {
      const response = await fetch(
        `https://api.themoviedb.org/3//movie/${type}/videos?api_key=a4ae14e6dc40d4017e61df4a11712f48`
      );
      const responseData = await response.json();
      console.log(responseData.results);
      const trailerFilter = responseData.results.filter(
        (el) => el.type === "Trailer"
      );
      setYoutube(trailerFilter);
      setKey(trailerFilter[0].key);
      console.log(trailerFilter);
      const teaserFilter = responseData.results.filter(
        (el) => el.type === "Teaser"
      );
    };
    fetchMeals(abc[0].id);
  }, []);
  console.log(youtube);
  console.log(abc);
  return (
    <Modal onClick={props.onClick}>
      <div className="d-flex justify-content-end">
        <div>
          <button onClick={props.onClick}>X</button>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-5">
            <div className={classes.boxtext}>
              <div className="d-flex flex-column bd-highlight mb-3 ">
                <div className="p-2 bd-highlight text-light ">
                  <h3 className="fw-bold text-light">
                    {abc[0].name}
                    {abc[0].original_title}
                  </h3>
                  <h1 className=" mt-4 bg-light border-2 border-top border-light" />
                </div>
                <div className="ps-2 bd-highlight text-light">
                  <p>
                    Release Date : {abc[0].release_date}
                    <span>{abc[0].vote_average}</span>
                  </p>
                </div>
                <div className="ps-2 bd-highlight text-light">
                  {abc[0].overview}
                </div>
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className={classes.boximg}>
              {youtube.length === 0 ? (
                <img
                  className={classes.boximg}
                  //   width="auto"
                  //   height="480px"
                  src={`https://image.tmdb.org/t/p/original${abc[0].backdrop_path}`}
                />
              ) : (
                <iframe
                  className={classes.boximg}
                  //   width="848px"
                  //   height="480px"
                  src={`https://www.youtube.com/embed/${key}`}
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default Detail;
