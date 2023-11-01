import app from "./generic.js"
import {verAutenticacion} from "./generic.js"
import {getFirestore,onSnapshot, collection,doc,getDoc,where,query,updateDoc,addDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"



const db = getFirestore(app);

window.onload=function(){
    verAutenticacion()
    const db = getFirestore(app);

    const collectionTipoLibro=collection(db,"TipoLibro")
    const queryC=query(collectionTipoLibro,where("Habilitado","==",true))
    onSnapshot(queryC,(collection)=>{
        ListarTipoLibros(collection)
    })
    console.log("Consulta")
    console.log(query)
}

function ListarTipoLibros(collection){

    var contenido="<table class='table mt-2'>"
        contenido+= "<thead>"
        contenido+= "<tr>"
        contenido+="<th>id</th>"
        contenido+="<th> Nombre Tipo Libro </th></th>"
        contenido+="<th> Descripcion</th>"
        contenido+="<th> Operaciones</th>"

        contenido+= "</thead>"

        contenido+="<tbody>"

        collection.forEach(doc => {
            let fila=doc.data()
            console.log(fila)

            contenido+="<tr>"
        contenido+= "<thead>"
        contenido+="<td>"+doc.id+"</td>"
        contenido+="<td>"+fila.Nombre+"</td>"
        contenido+="<td>"+fila.Descripcion+"</td>"
        contenido+="<td> <input id='abrirModalE' type='button' dataparametro="+doc.id+" class='btn btn-primary mr-4' value='Editar' data-toggle='modal'data-target='#EditarTipoLibroModal'>"
        contenido+="<input id='Eliminar' type='button' class='btn btn-danger' dataparametro="+doc.id+" value='Eliminar'> </td>"
        
         

        });
        contenido+="</tbody>"
        contenido+="</table>"


        document.getElementById("DatosTipoLibro").innerHTML=contenido 
        document.getElementById("abrirModalE").addEventListener("click",()=>{
           
            let id=document.getElementById("abrirModalE").getAttribute("dataparametro")
            abrirModal(id)
        })

        document.getElementById("Eliminar").addEventListener("click",()=>{
            let id=document.getElementById("Eliminar").getAttribute("dataparametro")
            Eliminar(id)
        })



}

function abrirModal(id){
Limpiar()
if(id==""){
    document.getElementById("LabelTitle").innerHTML="Agregando Tipo Libro"
    document.getElementById("SubmitRegistrar").innerHTML="Agregar"  
    


}
else{
    document.getElementById("LabelTitle").innerHTML="Editando Tipo Libro" 
    document.getElementById("SubmitRegistrar").innerHTML="Guardar"  
    
    const docRef=doc(db,"TipoLibro",id)
    getDoc(docRef).then((doc)=>{

    if(doc.exists()){

        //Accedemo a los datos del documento
        let data=doc.data()
      document.getElementById("IdDisplayTL").value=id
      document.getElementById("NombreTL").value=data.Nombre
      document.getElementById("DescripcionTL").value=data.Descripcion

    }

    else{

        alert("el documento no existe")
    }

    
}).catch((err)=>console.error(err))
}
}

function Eliminar(id){
if(confirm("Deseas eliminar realmente este item?")===true){
const docTipoLibro=doc(db,"TipoLibro",id)
updateDoc(docTipoLibro,{

    Habilitado:false
}).then((res)=>{

    alert('Se elimino Correctamente')
}).catch((err)=>console.error(err))


}


}

function CrearTipoLibro(){

    const IdTipoLibro=document.getElementById("IdDisplayTL").value
    const Nombre=document.getElementById("NombreTL").value
    const Descripcion=document.getElementById("DescripcionTL").value
    const alertError=document.getElementById("AlertErrTL")

    //Validar Informacion
    if(Nombre==""){
        alertError.style.display="block"
        alertError.innerHTML='Debe ingresar el nombre del tipo de libro'
        return
    }
    if(Descripcion==""){
        alertError.style.display="block"
        alertError.innerHTML='Debe ingresar la descripcio del tipo de libro'
        return
    }

    //Es nuevo
  if(IdTipoLibro===""){
   addDoc(collection(db,"TipoLibro"),{
    Nombre:Nombre,
    Descripcion:Descripcion,
    Habilitado:true
   }).then((res)=>{

    alert("Se agrego Exitosamente")
    document.getElementById("Cerrar_Registro").click()
   }).catch((err)=>console.error(err))

  }

  //Es Editar
  else{
   const DocRef=doc(db,"TipoLibro",IdTipoLibro)

   updateDoc(DocRef,{
    Nombre:Nombre,
    Descripcion:Descripcion
   }).then((res)=>{
            document.getElementById("Cerrar_Registro").click()
            alert("Se actualizo Correctamente")
           
   }).catch((err)=>console.error(err))

  }



}

function Limpiar(){
    document.getElementById("IdDisplayTL").value=""
    document.getElementById("NombreTL").value=""
    document.getElementById("DescripcionTL").value=""
}

document.getElementById("AgregarTL").addEventListener("click",()=>{
    abrirModal("")
})
document.getElementById("SubmitRegistrar").addEventListener("click",CrearTipoLibro)