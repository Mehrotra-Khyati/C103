var firebaseConfig = {
    apiKey: "AIzaSyBiwLGX9ixQp73KIRAscqYZ53SWw2in9kk",
    authDomain: "lets-chat-ddb89.firebaseapp.com",
    databaseURL: "https://lets-chat-ddb89-default-rtdb.firebaseio.com",
    projectId: "lets-chat-ddb89",
    storageBucket: "lets-chat-ddb89.appspot.com",
    messagingSenderId: "492865007160",
    appId: "1:492865007160:web:0d2b3b06f059603b17c0cd",
    measurementId: "G-EWXEFEXPE7"
  };
  
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.setItem("user_name" user_name); 
room_name = localStorage.setItem("room_name" room_name);   


function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      like:0,
      message:msg,
      name:user_name
  
    
    })
    document.getElementById("msg").value = ""
  }