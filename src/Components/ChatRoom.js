import React, { useEffect, useRef, useState } from 'react';
import { auth, firestore } from '../Firebase/Firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from '../Firebase/Firebase.js';
import { FaLocationArrow } from 'react-icons/fa';
import ChatMessage from './ChatMessage';

function ChatRoom(){
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt');
    const [messages] = useCollectionData(query, {idField: 'id'});
    const [formValue, setFormValue] = useState('');
    useEffect(() => {
      const btnStyleEl = document.querySelector(".btnStyle");
      const sginBtnEl = document.querySelector(".sginBtn");
      btnStyleEl.style.display = 'inline-block';        
      console.log( btnStyleEl, sginBtnEl );
    }, []);
  
    const sendMessage = async(e) => {
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser;
  
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      });
  
      setFormValue('');
  
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  
    return(
      <div className={"chatRoom"}>
        <section id="mainChat">
          {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
          <div ref={dummy}></div>
        </section>
  
        <form onSubmit={sendMessage}>
          <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
          <button type="submit" disabled={!formValue}><FaLocationArrow /></button>
        </form>
      </div>
    )
}

export default ChatRoom
