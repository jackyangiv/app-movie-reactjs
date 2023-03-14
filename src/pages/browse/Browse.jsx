import React from "react";
import { useState } from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Original from "./Menu/Original";
import Trending from "./Menu/Trending";
import TopRate from "./Menu/TopRate";
import ActionMovies from "./Menu/ActionMovies";
import ComedyMovie from "./Menu/ComedyMovie";
import HorrorMovies from "./Menu/HorrorMovies";
import RomanceMovies from "./Menu/RomanceMovies";
import Documentaries from "./Menu/Documentaries";
import Card from "../../components/UI/Card";
import { useContext, useEffect } from "react";
import DetailContext from "./Menu/store/detail-context";
import Detail from "./Menu/Detail";
function Browse() {
  const [showDetails, setShowDetails] = useState(false);
  const detailCtx = useContext(DetailContext);
  const [youtube, setYoutube] = useState([]);
  const showDetailHandler = () => {
    setShowDetails(true);
  };
  const hideDetail = () => {
    detailCtx.items.shift();
    detailCtx.movieTeaser.shift();
    detailCtx.movieTrailer.shift();
    setShowDetails(false);
  };
  return (
    <div>
      <NavBar />
      <Banner />
      <Card>
        <Original onClick={showDetailHandler} />
        <Trending onClick={showDetailHandler} />
        <TopRate onClick={showDetailHandler} />
        <ActionMovies onClick={showDetailHandler} />
        <ComedyMovie onClick={showDetailHandler} />
        <HorrorMovies onClick={showDetailHandler} />
        <RomanceMovies onClick={showDetailHandler} />
        <Documentaries onClick={showDetailHandler} />
      </Card>
      {showDetails ? <Detail onClick={hideDetail} /> : ""}
    </div>
  );
}

export default Browse;
