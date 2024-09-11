import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/HeaderSection/Header";
import Feed from "./Components/FeedSection/Feed";
import SearchVideoResult from "./Components/SearchSection/SearchVideoResult";
import VideoDetails from "./Components/VideoSection/VideoDetails";
import { AppContext } from "./UseConstextHook/UseContextApi";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col  w-full">
          <Header />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route
              path="/search/:searchQuery"
              element={<SearchVideoResult />}
            />
            <Route
              path="/video/:categoryId/:videoId"
              element={<VideoDetails />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
