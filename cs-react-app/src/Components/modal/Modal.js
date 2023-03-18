import { React, useState } from "react";
import ReactDom from "react-dom";
import { Navigate } from "react-router-dom";
import SignInModal from "./SignInModal";
import "./modal.css";

function Modal({ setOpenModal }) {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);

  const handleContinueButton = () => {
    // get the username and password from the form
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    // create a new object with the username and password
    const user = {
      username: username,
      password: password
    }
    // send the object to the server
  }

  const someFunction = (value) => {
    setOpenModal(value);
  }

  async function handleNewAccount() {
    console.log("test");
    setShouldRedirect(true);

    // // close the modal
    // someFunction(false);
    // setShouldRedirect(true);
    // // ouvrir le new modal
    // // setSignInModalOpen(true);
    // // { signInModalOpen && <SignInModal setSignInModalOpen={setSignInModalOpen} /> }
  }


  if (shouldRedirect) {
    return <Navigate to="/new-account-page" />;
  }

  return ReactDom.createPortal(
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="modalTitle"></div>
        <div className="modalBody">
          <form>
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <input className="bodyButton" type="submit" value="Submit" onClick={handleContinueButton} />
          </form>
          <button className="bodyButton" onClick={handleNewAccount}>Create a new account</button>

        </div>
        <div className="modalFooter">
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;