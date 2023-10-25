import app from "./generic.js"
import {verAutenticacion} from "./generic.js"
import {getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"


// Carga de pagina
window.onload=function(){

    verAutenticacion()
}
const auth=getAuth(app)


function IniciarSesion(){

let email=document.getElementById("txtCorreoIngresar").value
let pass=document.getElementById("txtPassIngresar").value
signInWithEmailAndPassword(auth,email,pass).then((res)=>{

console.log(res)
document.location.href="/MisPrestamos.html"
}).catch((err)=>{

document.getElementById("alert_Err_Login").style.display="block"
document.getElementById("alert_Err_Login").innerHTML=err

})


}

function AuthGoogle(){
 const ProviderGoogle= new GoogleAuthProvider();
 signInWithPopup(auth,ProviderGoogle).then((res=>{
 document.location.href="/MisPrestamos.html"

 })).catch((err)=>{
 
    console.error(err)

 })

}

document.getElementById("btn-login").addEventListener("click",IniciarSesion)
document.getElementById("AuthG").addEventListener("click",AuthGoogle)

