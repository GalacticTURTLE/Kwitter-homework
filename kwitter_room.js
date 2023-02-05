
const firebaseConfig = {
      apiKey: "AIzaSyACv-ZFxHTjFGfMMqZIOdLyvNKVz12YgBM",
      authDomain: "quitter-bff2f.firebaseapp.com",
      databaseURL: "https://quitter-bff2f-default-rtdb.firebaseio.com",
      projectId: "quitter-bff2f",
      storageBucket: "quitter-bff2f.appspot.com",
      messagingSenderId: "572512324891",
      appId: "1:572512324891:web:3e128f676a0dfa34c597be"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirecttoRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML=
"welcome  "+user_name+"!";

function addRoom()
{
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name",room_name);

      window.location="kwitter_page.html";
}

function redirecttoRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}