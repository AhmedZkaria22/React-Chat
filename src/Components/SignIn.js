import React, { useEffect } from 'react'
import firebase from '../Firebase/Firebase.js';
import {auth } from '../Firebase/Firebase.js';

function SignIn() {
    useEffect(() => {
        const btnStyleEl = document.querySelector(".btnStyle");
        const sginBtnEl = document.querySelector(".sginBtn");
        btnStyleEl.style.display = 'none';        
        document.querySelector(".AZChat .chatContainer .chatHeader").style.bottom = "auto"; 
        document.querySelector(".AZChat .chatContainer .chatHeader").style.top = "0rem"; 
        console.log( btnStyleEl, sginBtnEl );
    }, []);
    

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return(        
        <button className={"sginBtn"} onClick={ signInWithGoogle } >Sign in with Google</button>        
    )
}

export default SignIn