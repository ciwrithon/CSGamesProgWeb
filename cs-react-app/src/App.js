import React from "react";
import Card from "./Components/Card";
import Main from "./Components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/continue-page" element={<Card />} />
      </Routes>
    </>
  );
}

export default App;


