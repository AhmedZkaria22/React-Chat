import { useAuthState } from 'react-firebase-hooks/auth';
import {FaAngleDown, FaAngleUp} from 'react-icons/fa';
import {auth} from '../Firebase/Firebase.js';
import SignIn from '../Components/SignIn.js';
import SignOut from '../Components/SignOut';
import ChatRoom from '../Components/ChatRoom';
import './AzChatbot.css';
import {FiSun, FiMoon} from 'react-icons/fi';

function AzChatbot() {
  const [user] = useAuthState(auth);
  let tg = false;

  const colorMoodFun = (e) => {
    if( e.target === document.querySelector('.chatHeader__colorMoodWrapper__sun') ){      
        document.querySelector('.chatHeader__colorMoodWrapper__moon').style.display = "block";
        document.querySelector('.chatHeader__colorMoodWrapper__sun').style.display = "none";

        document.documentElement.style.setProperty("--centColor", "#E3E1EA");
        document.documentElement.style.setProperty("--centBack", "#2568FE");
        document.documentElement.style.setProperty("--receivedColor", "#E3E1EA");
        document.documentElement.style.setProperty("--receivedBack", "#343145");
        document.documentElement.style.setProperty("--chatroomBack", "#252331");   
        document.documentElement.style.setProperty("--headerColor", "#F3F2F7");
        document.documentElement.style.setProperty("--headerBack", "#252331");
        document.documentElement.style.setProperty("--headColor", "#fafafa");
        document.documentElement.style.setProperty("--chatBack", "#211E2D");
        document.documentElement.style.setProperty("--sendIc", "#1950FB");
        
    }
    else{
        document.querySelector('.chatHeader__colorMoodWrapper__sun').style.display = "block";
        document.querySelector('.chatHeader__colorMoodWrapper__moon').style.display = "none";

        document.documentElement.style.setProperty("--centColor", "#fafafa");
        document.documentElement.style.setProperty("--centBack", "#0D8CFE");
        document.documentElement.style.setProperty("--receivedColor", "#333");
        document.documentElement.style.setProperty("--receivedBack", "#DFE2E9");
        document.documentElement.style.setProperty("--chatroomBack", "#FDFDFD");   
        document.documentElement.style.setProperty("--headerColor", "#fafafa");
        document.documentElement.style.setProperty("--headerBack", "#0D8CFE");
        document.documentElement.style.setProperty("--headColor", "#0D8CFE");
        document.documentElement.style.setProperty("--chatBack", "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 100%)");
        document.documentElement.style.setProperty("--sendIc", "#333");
    }
  }

  return (
    <div className="AZChat">   
        <h2> AZ Chat </h2> 
        <div className={"chatContainer"}>
          <div className={"chatHeader"}>
            <h5>Chat</h5>
            <button className={"btnStyle"} 
                onClick={() => {
                if(tg == false){
                document.querySelector(".AZChat .chatContainer .chatRoom").style.backgroundColor = "transparent";
                // document.querySelector(".AZChat .chatContainer .chatRoom").style.height = "0rem";
                document.querySelector(".AZChat .chatContainer .chatRoom #mainChat").style.height = "0rem";
                document.querySelector(".AZChat .chatContainer .chatRoom #mainChat").style.maxHeight = "0rem";
                document.querySelector(".AZChat .chatContainer .chatRoom #mainChat").style.padding = "0";
                document.querySelector(".AZChat .chatContainer .chatHeader").style.bottom = "2rem"; 
                document.querySelector(".AZChat .chatContainer .chatHeader").style.top = "auto"; 
                document.querySelector(".AZChat .chatContainer .chatHeader .tgBtnD").style.display = "none"; 
                document.querySelector(".AZChat .chatContainer .chatHeader .tgBtnU").style.display = "inline-block";
                tg = true;
                }else if(tg == true){
                    document.querySelector(".AZChat .chatContainer .chatRoom").style.backgroundColor = "var(--chatroomBack)";
                    // document.querySelector(".AZChat .chatContainer .chatRoom").style.height = "calc(100% - 2.3rem)";
                    document.querySelector(".AZChat .chatContainer .chatRoom #mainChat").style.height = "calc(100% - 2rem)";
                    document.querySelector(".AZChat .chatContainer .chatRoom #mainChat").style.maxHeight = "calc(100% - 2rem)";
                    document.querySelector(".AZChat .chatContainer .chatRoom #mainChat").style.padding = "10px 0px";
                    document.querySelector(".AZChat .chatContainer .chatHeader").style.bottom = "auto"; 
                    document.querySelector(".AZChat .chatContainer .chatHeader").style.top = "0rem"; 
                    document.querySelector(".AZChat .chatContainer .chatHeader .tgBtnU").style.display = "none";
                    document.querySelector(".AZChat .chatContainer .chatHeader .tgBtnD").style.display = "inline-block"; 
                    tg = false;
                }
                }}><FaAngleDown className={"tgBtnD"}/><FaAngleUp className={"tgBtnU"}/>
            </button> 
            <SignOut />
            <div className={'chatHeader__colorMoodWrapper'}>
              <FiSun className={'chatHeader__colorMoodWrapper__sun'} onClick={colorMoodFun}/>
              <FiMoon className={'chatHeader__colorMoodWrapper__moon'} onClick={colorMoodFun}/>
            </div>
          </div>                
          {user ? <ChatRoom /> : <SignIn />}

        </div>
    </div>
  );
}

export default AzChatbot;