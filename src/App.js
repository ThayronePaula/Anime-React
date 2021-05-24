import React from "react";
import Header from "./Components/Header/Header";

import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Anime from "./Components/Anime/Anime";

const App = () => {

  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/anime/:id' element={ <Anime/> } />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
