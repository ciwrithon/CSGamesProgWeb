import React, { useState } from "react";
import "./main.css";
import Modal from "../modal/Modal";

function Main() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div className="mainWrapper">

                <img width="100%" src={require("../../assets/cuteCat.png")}></img>
                <button className="openButton"
                    onClick={() => {
                        setModalOpen(true);
                    }}
                >
                    Open
                </button>
                <p>:)</p>
                {modalOpen && <Modal setOpenModal={setModalOpen} />}
            </div>
        </>
    );
}

export default Main;


