import app from "./generic.js"
import {verAutenticacion} from "./generic.js"
import {getFirestore,onSnapshot, collection,doc,getDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"


const db = getFirestore(app);

window.onload=function(){
    verAutenticacion()
    const db = getFirestore(app);
    const query=collection(db,"TipoLibro")
    onSnapshot(query,(collection)=>{
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
        contenido+="<td> <input type='button' class='btn btn-primary mr-4' value='Editar' data-toggle='modal'data-target='#EditarTipoLibroModal'>"
        contenido+="<input type='button' class='btn btn-danger' value='Eliminar'> </td>"
        
         

        });
        contenido+="</tbody>"
        contenido+="</table>"


        document.getElementById("DatosTipoLibro").innerHTML=contenido




}

function abrirModal(id){

document.getElementById("IdDisplayTL").innerHTML=id


}