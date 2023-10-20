
import {initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js"
import {getAuth, onAuthStateChanged ,  signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"



const firebaseConfig = {
    apiKey: "AIzaSyBSNdhFyVG5xJqXpt6Otz7auEzX-5XBrtQ",
    authDomain: "proyectodiplomado-5ad05.firebaseapp.com",
    projectId: "proyectodiplomado-5ad05",
    storageBucket: "proyectodiplomado-5ad05.appspot.com",
    messagingSenderId: "450895625770",
    appId: "1:450895625770:web:a593b850563ecbff124d53",
    measurementId: "G-4YQ72ZXYQ0"
  };

  const app= initializeApp(firebaseConfig)
  const auth=getAuth(app)

  function verAutenticacion(){
  onAuthStateChanged(auth,(user)=>{
   


    if(user)
    //El usuario ha iniciado Sesion 
        {    

            console.log("El usuario ha iniciado sesion")
            document.getElementById("")

        
        



      document.getElementById("imgPhoto").src=user.photoURL


        }   

  })

  }



  export default app
  export {verAutenticacion}
