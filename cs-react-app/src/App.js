import React from "react";
import Card from "./Components/card/Card";
import Main from "./Components/main/Main";
import { Route, Routes } from "react-router-dom";
import SignInModal from "./Components/modal/SignInModal";
import Modal from "./Components/modal/Modal";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/continue-page" element={<Card />} />
        <Route path="/new-account-page" element={<SignInModal />} />
        <Route path="/login-page" element={<Modal />} />
      </Routes>
    </>
  );
}

export default App;


