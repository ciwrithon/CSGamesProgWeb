import React from "react";
import Card from "./Components/card/Card";
import Main from "./Components/main/Main";
import { Route, Routes } from "react-router-dom";

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


