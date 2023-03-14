import { useState } from "react";
import NavIcon from "./NavIcon";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const NavBar = (props) => {
  const [scroll, setScroll] = useState(false);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });
  return (
    <>
      <div
        className={`d-flex justify-content-between p-3 navbar fixed-top ${
          scroll ? "bg-dark" : ""
        }`}
      >
        <div>
          <p className="text-danger fw-bold h6">Duong Nguyen Khanh Phuong</p>
        </div>
        <div>
          <Link to="/search">
            <NavIcon></NavIcon>
          </Link>
        </div>
      </div>
    </>
  );
};
export default NavBar;
