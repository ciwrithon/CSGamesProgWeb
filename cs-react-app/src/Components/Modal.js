import { React, useState } from "react";
import styled from "styled-components";
import ReactDom from "react-dom";
import { Navigate } from "react-router-dom";

function Modal({ setOpenModal }) {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleContinueButton = () => {
    setShouldRedirect(true);
  }

  if (shouldRedirect) {
    return <Navigate to="/continue-page" />;
  }

  return ReactDom.createPortal(
    <ModalBackground>
      <ModalContainer>
        <TitleCloseBtn>
          <CloseButton
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </CloseButton>
        </TitleCloseBtn>
        <ModalTitle></ModalTitle>
        <ModalBody>
          <BodyButton onClick={handleContinueButton}>Continue</BodyButton>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </ModalContainer>
    </ModalBackground>,
    document.getElementById("portal")
  );
}

export default Modal;

const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(200, 200, 200, 0.7);
`;

const ModalContainer = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const TitleCloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
`;

const ModalTitle = styled.div`
  display: inline-block;
  text-align: center;
  margin-top: 10px;
`;

const ModalBody = styled.div`
  flex: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  text-align: center;
`;

const ModalFooter = styled.div`
  flex: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: auto;
`;

const BodyButton = styled.button`
  width: 150px;
  height: 45px;
  margin: 10px;
  border: none;
  background-color: cornflowerblue;
  color: white;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
`;