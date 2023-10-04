let Puntos=0

const InsertNum=()=>{
return new Promise((resolve,reject)=>{
const numUsuario=Number(window.prompt("Introduce un numero del 1-6"))

if(isNaN(numUsuario)){



    reject(new Error("Tipo de entrada incorrecta"))
    
    }

    resolve({
        numero:numUsuario,
    })




})

}

InsertNum().then((res)=>{


    const numUsuario=res.numero
    const numAleatorio=Math.floor(Math.random()*6+1)

    if(numUsuario===numAleatorio){

        Puntos=2
    }
    
    if(numUsuario===numAleatorio-1 || numUsuario===numAleatorio+1){

        Puntos=1
    }


    console.log("num aleatorio:"+numAleatorio+" Obtuviste "+Puntos)

}).catch((error)=>alert(error)).finally(()=>alert("terminaste el juego")


)



