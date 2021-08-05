import React, { useEffect } from 'react'
import {auth} from '../Firebase/Firebase.js';

function SignOut(){

  useEffect(() => {
    document.querySelector(".AZChat .chatContainer .chatHeader").style.bottom = "2rem"; 
    document.querySelector(".AZChat .chatContainer .chatHeader").style.top = "auto"; 
  }, []);

    return auth.currentUser && (
      <button onClick={() =>  { auth.signOut(); }}>Sign Out</button>
    )
}

export default SignOut
