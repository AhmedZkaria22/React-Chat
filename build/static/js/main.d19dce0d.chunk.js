(this["webpackJsonpreact-chat"]=this["webpackJsonpreact-chat"]||[]).push([[0],{27:function(e,t,c){},29:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var o=c(4),n=c(17),a=c.n(n),r=(c(27),c(28),c(29),c(11)),s=c(18),l=c(10),d=c(12);c(38),c(31),c(37);d.a.initializeApp({apiKey:"AIzaSyCgtoweQnHcYa0a0B9dLwFbE9KTGVCg6_g",authDomain:"chatbot-896c0.firebaseapp.com",projectId:"chatbot-896c0",storageBucket:"chatbot-896c0.appspot.com",messagingSenderId:"368946359439",appId:"1:368946359439:web:0aec4eed96e92447d8d4fa",measurementId:"G-NYYF52TG6M"});var u=d.a,i=d.a.auth(),m=d.a.firestore(),h=c(5);var y=function(){return Object(o.useEffect)((function(){var e=document.querySelector(".btnStyle"),t=document.querySelector(".sginBtn");e.style.display="none",document.querySelector(".AZChat .chatContainer .chatHeader").style.bottom="auto",document.querySelector(".AZChat .chatContainer .chatHeader").style.top="0rem",console.log(e,t)}),[]),Object(h.jsx)("button",{className:"sginBtn",onClick:function(){var e=new u.auth.GoogleAuthProvider;i.signInWithPopup(e)},children:"Sign in with Google"})};var p=function(){return Object(o.useEffect)((function(){document.querySelector(".AZChat .chatContainer .chatHeader").style.bottom="2rem",document.querySelector(".AZChat .chatContainer .chatHeader").style.top="auto"}),[]),i.currentUser&&Object(h.jsx)("button",{onClick:function(){i.signOut()},children:"Sign Out"})},b=c(15),C=c.n(b),j=c(21),f=c(22);var g=function(e){var t=e.message,c=t.text,o=t.uid,n=t.photoURL,a=o===i.currentUser.uid?"sent":"received";return Object(h.jsxs)("div",{className:"message ".concat(a),children:[Object(h.jsx)("img",{src:n}),Object(h.jsx)("p",{children:c})]})};var O=function(){var e=Object(o.useRef)(),t=m.collection("messages"),c=t.orderBy("createdAt"),n=Object(f.a)(c,{idField:"id"}),a=Object(r.a)(n,1)[0],s=Object(o.useState)(""),d=Object(r.a)(s,2),y=d[0],p=d[1];Object(o.useEffect)((function(){var e=document.querySelector(".btnStyle"),t=document.querySelector(".sginBtn");e.style.display="inline-block",console.log(e,t)}),[]);var b=function(){var c=Object(j.a)(C.a.mark((function c(o){var n,a,r;return C.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return o.preventDefault(),n=i.currentUser,a=n.uid,r=n.photoURL,c.next=4,t.add({text:y,createdAt:u.firestore.FieldValue.serverTimestamp(),uid:a,photoURL:r});case 4:p(""),e.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"chatRoom",children:[Object(h.jsxs)("section",{id:"mainChat",children:[a&&a.map((function(e){return Object(h.jsx)(g,{message:e},e.id)})),Object(h.jsx)("div",{ref:e})]}),Object(h.jsxs)("form",{onSubmit:b,children:[Object(h.jsx)("input",{value:y,onChange:function(e){return p(e.target.value)},placeholder:"say something nice"}),Object(h.jsx)("button",{type:"submit",disabled:!y,children:Object(h.jsx)(l.c,{})})]})]})},v=(c(35),c(16));var S=function(){var e=Object(s.a)(i),t=Object(r.a)(e,1)[0],c=!1,o=function(e){e.target===document.querySelector(".chatHeader__colorMoodWrapper__sun")?(document.querySelector(".chatHeader__colorMoodWrapper__moon").style.display="block",document.querySelector(".chatHeader__colorMoodWrapper__sun").style.display="none",document.documentElement.style.setProperty("--centColor","#E3E1EA"),document.documentElement.style.setProperty("--centBack","#2568FE"),document.documentElement.style.setProperty("--receivedColor","#E3E1EA"),document.documentElement.style.setProperty("--receivedBack","#343145"),document.documentElement.style.setProperty("--chatroomBack","#252331"),document.documentElement.style.setProperty("--headerColor","#F3F2F7"),document.documentElement.style.setProperty("--headerBack","#252331"),document.documentElement.style.setProperty("--headColor","#fafafa"),document.documentElement.style.setProperty("--chatBack","#211E2D"),document.documentElement.style.setProperty("--sendIc","#1950FB")):(document.querySelector(".chatHeader__colorMoodWrapper__sun").style.display="block",document.querySelector(".chatHeader__colorMoodWrapper__moon").style.display="none",document.documentElement.style.setProperty("--centColor","#fafafa"),document.documentElement.style.setProperty("--centBack","#0D8CFE"),document.documentElement.style.setProperty("--receivedColor","#333"),document.documentElement.style.setProperty("--receivedBack","#DFE2E9"),document.documentElement.style.setProperty("--chatroomBack","#FDFDFD"),document.documentElement.style.setProperty("--headerColor","#fafafa"),document.documentElement.style.setProperty("--headerBack","#0D8CFE"),document.documentElement.style.setProperty("--headColor","#0D8CFE"),document.documentElement.style.setProperty("--chatBack","linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 100%)"),document.documentElement.style.setProperty("--sendIc","#333"))};return Object(h.jsxs)("div",{className:"AZChat",children:[Object(h.jsx)("h2",{children:" AZ Chat "}),Object(h.jsxs)("div",{className:"chatContainer",children:[Object(h.jsxs)("div",{className:"chatHeader",children:[Object(h.jsx)("h5",{children:"Chat"}),Object(h.jsxs)("button",{className:"btnStyle",onClick:function(){0==c?(document.querySelector(".AZChat .chatContainer .chatRoom").style.backgroundColor="transparent",document.querySelector(".AZChat .chatContainer .chatRoom #mainChat").style.height="0rem",document.querySelector(".AZChat .chatContainer .chatRoom #mainChat").style.maxHeight="0rem",document.querySelector(".AZChat .chatContainer .chatRoom #mainChat").style.padding="0",document.querySelector(".AZChat .chatContainer .chatHeader").style.bottom="2rem",document.querySelector(".AZChat .chatContainer .chatHeader").style.top="auto",document.querySelector(".AZChat .chatContainer .chatHeader .tgBtnD").style.display="none",document.querySelector(".AZChat .chatContainer .chatHeader .tgBtnU").style.display="inline-block",c=!0):1==c&&(document.querySelector(".AZChat .chatContainer .chatRoom").style.backgroundColor="var(--chatroomBack)",document.querySelector(".AZChat .chatContainer .chatRoom #mainChat").style.height="calc(100% - 2rem)",document.querySelector(".AZChat .chatContainer .chatRoom #mainChat").style.maxHeight="calc(100% - 2rem)",document.querySelector(".AZChat .chatContainer .chatRoom #mainChat").style.padding="10px 0px",document.querySelector(".AZChat .chatContainer .chatHeader").style.bottom="auto",document.querySelector(".AZChat .chatContainer .chatHeader").style.top="0rem",document.querySelector(".AZChat .chatContainer .chatHeader .tgBtnU").style.display="none",document.querySelector(".AZChat .chatContainer .chatHeader .tgBtnD").style.display="inline-block",c=!1)},children:[Object(h.jsx)(l.a,{className:"tgBtnD"}),Object(h.jsx)(l.b,{className:"tgBtnU"})]}),Object(h.jsx)(p,{}),Object(h.jsxs)("div",{className:"chatHeader__colorMoodWrapper",children:[Object(h.jsx)(v.b,{className:"chatHeader__colorMoodWrapper__sun",onClick:o}),Object(h.jsx)(v.a,{className:"chatHeader__colorMoodWrapper__moon",onClick:o})]})]}),t?Object(h.jsx)(O,{}):Object(h.jsx)(y,{})]})]})};var x=function(){return Object(h.jsx)("div",{className:"app",children:Object(h.jsx)(S,{})})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(t){var c=t.getCLS,o=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),o(e),n(e),a(e),r(e)}))};a.a.render(Object(h.jsx)(x,{}),document.getElementById("root")),E()}},[[36,1,2]]]);
//# sourceMappingURL=main.d19dce0d.chunk.js.map