import React, { useState } from "react";
import "./main.css";
import Modal from "../modal/Modal";

function Main() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div className="mainWrapper">
                <button className="openButton"
                    onClick={() => {
                        setModalOpen(true);
                    }}
                >
                    Open
                </button>

                {modalOpen && <Modal setOpenModal={setModalOpen} />}
            </div>
        </>
    );
}

export default Main;


