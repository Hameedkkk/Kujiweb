
   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
   

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import { getDatabase,set,ref } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";

   


  const firebaseConfig = {
    apiKey: "AIzaSyBuQEV1OX9Ec1AjUCzwuPFg8i1P0NoT62A",
    authDomain: "friends-9688b.firebaseapp.com",
    projectId: "friends-9688b",
    storageBucket: "friends-9688b.appspot.com",
    messagingSenderId: "980870315225",
    appId: "1:980870315225:web:ef39c1d249f0213bd652c8"
  };
  const app = initializeApp(firebaseConfig);
const auth = getAuth();
  // Initialize Firebase
  const database = getDatabase(app);

  
  
  
 submit.addEventListener('click',(e)=>{

var email = document.getElementById('email').value;

var password=document.getElementById('password').value;
var name=document.getElementById('name'). value;


createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    set(ref(database, 'users/' + user.uid), {
    name: name,
    email: email,
    password: password
    })
  .then(() => {
  // Data saved successfully!
  alert('user created successfully')
  window.location.href("")
})
.catch((error) => {
  // The write failed...
  alert('error')
})
    })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  })
  });

   
 