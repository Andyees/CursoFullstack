
async function requestAsyncAwait()
{
    
    const res = await fetch("https://api.thecatapi.com/v1/images/search");

    const respuesta=  await res.json()

    console.log(respuesta)
    
}







fetch("https://api.thecatapi.com/v1/images/search").then((res)=>{
//console.log(res)
//const respuestajson= res.json().then((resjson)=> console.log(resjson)).catch((error)=>console.log("error transformando la inforamcion"))



} ).catch((error)=>{

   // console.log("Hubo un error no se consiguio alcanzar la ruta"+error)
})


//setTimeout(()=>{
    console.log("estoy utlilzianddo settimeout")
//},2000)



const saludar=()=>{
    return new Promise(res=>{

        setTimeout(()=>{
            res("hola como vas")
        },2000)

    })
}

async function conversar(){
console.log(await saludar())

}

conversar()






