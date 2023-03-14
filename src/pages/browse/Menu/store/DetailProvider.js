import DetailContext from "./detail-context";

const DetailProvider = (props) => {
  const defaultContext = {
    items: [],
    data: [],
    movieTrailer: [],
    movieTeaser: [],
  };
  return (
    <DetailContext.Provider value={defaultContext}>
      {props.children}
    </DetailContext.Provider>
  );
};
export default DetailProvider;
