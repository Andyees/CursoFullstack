
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
            console.log("El usuario ha iniciado sesion" +user)
            //Cambiar estilos Inicio Sesion
             try{
              document.getElementById("login").style.display="none"
             }
             catch{
                console.log("No estamos en la pagina de logueo")
             }
            
             document.getElementById("Registro").style.display="none"
            
            document.getElementById("Nav_TipoLibro").style.display="inline-block"
            document.getElementById("Nav_Libro").style.display="inline-block"
            document.getElementById("Nav_MisPrestamos").style.display="inline-block"
            document.getElementById("itemSalir").style.display="inline-block"
            document.getElementById("divDatosUsu").style.visibility="visible"

            if(user.photoURL!=null)
            document.getElementById("imgPhoto").src=user.photoURL
            else{
              document.getElementById("imgPhoto").src="img/user_default.png"
            }
            if(user.displayName!=null){
              document.getElementById("lbNombreUsuario").innerHTML="Bienvenido "+user.displayName
            }
            else{
              document.getElementById("lbNombreUsuario").innerHTML="Bienvenido "+user.email
              
            }
        }  
        
   else{
            //Cambiar estilos Usuario no logueado
            document.getElementById("Nav_TipoLibro").style.display="none"
            document.getElementById("Nav_Libro").style.display="none"
            document.getElementById("Nav_MisPrestamos").style.display="none"
            document.getElementById("itemSalir").style.display="none"



    console.log("El usuario NO ha iniciado sesion")
        }

  })

  }
  function LogOut(){
   signOut(auth).then(()=>{

   console.log("Sesion Cerrada con exito")
   document.location.href="/"

   }).catch((err)=>{

      console.error("Error")

   })

  }

document.getElementById("itemSalir").addEventListener("click",LogOut)

  export default app
  export {verAutenticacion}
