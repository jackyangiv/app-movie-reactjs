import classes from "./SearchResults.module.css";
const SearchResults = (props) => {
  return (
    <a href="#">
      <img
        className={classes.image}
        src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
      ></img>
    </a>
  );
};
export default SearchResults;
