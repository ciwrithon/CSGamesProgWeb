import { React, useState } from "react";
import ReactDom from "react-dom";
import { Navigate } from "react-router-dom";
import "./modal.css";

function Modal({ setOpenModal }) {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleContinueButton = () => {
    setShouldRedirect(true);
  }

  if (shouldRedirect) {
    return <Navigate to="/continue-page" />;
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
          <div className="bodyButton" onClick={handleContinueButton}>Continue</div>
        </div>
        <div className="modalFooter">
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;