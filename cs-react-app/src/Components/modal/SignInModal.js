import { React, useState } from "react";
import ReactDom from "react-dom";
import { Navigate } from "react-router-dom";
import Modal from "./Modal";
import axios from 'axios';
import "./modal.css";

function SignInModal({ setSignInModalOpen }) {
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const [loginStatus, setLoginStatus] = useState(false);

    async function someFunction2(value) {
        setSignInModalOpen(value);
    }

    const handleContinueButton = () => {
        // get the username and password from the form
        const username = document.querySelector('input[name="username"]').value;
        const password = document.querySelector('input[name="password"]').value;
        console.log(username);
        console.log(password);
        // send the object to the server
        sendCredentialsRegister(username, password);
    }

    function sendCredentials(username, password) {
        let User = {
            username: username,
            password: password,
        }
        axios.post('http://localhost:3000/login-page', {
            username: username, password: password,
        }).then(res => {
            if (!res.data.message) {
                setLoginStatus(false)
            } else {
                console.log(res.data);
                setLoginStatus(true);
            }
        });
    }

    function sendCredentialsRegister(username, password) {
        axios.post('http://localhost:3000/new-account-page', {
            username: username, password: password,
        }).then(res => {
            console.log(res);
        });
    };



    return ReactDom.createPortal(
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                </div>
                <div className="modalTitle"></div>
                <div className="modalBody">
                    <form>
                        <input type="text" name="username" placeholder="Username" />
                        <input type="password" name="password" placeholder="Password" />
                        <input className="bodyButton" type="submit" value="Create account" onClick={handleContinueButton} />
                    </form>

                </div>
                <div className="modalFooter">
                </div>
            </div>
        </div>,
        document.getElementById("portal")
    );
}

export default SignInModal;