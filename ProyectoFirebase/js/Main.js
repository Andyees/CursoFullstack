import app from "./generic.js"
import {verAutenticacion} from "./generic.js"
import {getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider,signInWithPopup,GithubAuthProvider,signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"


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


function AuthGithub(){

const ProviderGithub=new GithubAuthProvider()

signInWithPopup(auth,ProviderGithub).then((res)=>{

document.location.href="/MisPrestamos.html"


}
).catch(()=>{

    console.error(err)

})
}

function CreateUser(){
let email=document.getElementById("txtCorreo").value
let password=document.getElementById("txtpass").value
let displayName=document.getElementById("txtDisplayName").value
createUserWithEmailAndPassword(auth,email,password).then((res)=>{
//     res.user.updateProfile({
//      displayName:displayName
//   })
    alert("Se registro exitosamente")
    document.getElementById("Cerrar_Registro").click()
     signOut(auth).then(()=>{

        console.log("Sesion Cerrada con exito")
        document.location.href="/"
     
                 }).catch((err)=>{
     
                     console.error("Error")
     
        })
}).catch((error)=>{

    console.error
})




}
document.getElementById("btn-login").addEventListener("click",IniciarSesion)
document.getElementById("AuthG").addEventListener("click",AuthGoogle)
document.getElementById("AuthGithub").addEventListener("click",AuthGithub)
document.getElementById('SubmitRegistrar').addEventListener('click',CreateUser)


