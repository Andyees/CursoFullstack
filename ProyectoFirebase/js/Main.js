//import app from "./generic.js"
import {getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"

const auth=getAuth(app)


function IniciarSesion(){

let email=document.getElementById("txtCorreoIngresar").value
let pass=document.getElementById("txtPassIngresar").value
signInWithEmailAndPassword(auth,email,pass).then((res)=>{

console.log(res)
document.location.href("/")
})


}

document.getElementById("btn-login").addEventListener("click",IniciarSesion)
