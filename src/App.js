import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailProvider from "./pages/browse/Menu/store/DetailProvider";

import Browse from "./pages/browse/Browse";
import Search from "./pages/search/Search";

function App() {
  return (
    <DetailProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Browse />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </DetailProvider>
  );
}

export default App;
