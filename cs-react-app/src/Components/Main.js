import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: "Nunito", sans-serif;
`;

export const Button = styled.button`
  width: 200px;
  height: 40px;
  border: none;
  border-radius: 6px;
  background-color: cornflowerblue;
  color: white;
  cursor: pointer;

  margin-top: auto;
  margin-bottom: auto;
`;

function Main() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <MainWrapper>
                <Button
                    onClick={() => {
                        setModalOpen(true);
                    }}
                >
                    Open
                </Button>

                {modalOpen && <Modal setOpenModal={setModalOpen} />}
            </MainWrapper>
        </>
    );
}

export default Main;


