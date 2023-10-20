let spacecraftName2: string = 'Determination';
let speedMph: number = 17500;
let kilomitersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621;

let milestoMars=kilomitersToMars*milesPerKilometer
let hoursToMars=milestoMars/speedMph
let daysToMars=hoursToMars/24

function getDaysToLocation(kilometersAway:number):number{

    let milesAway:number=kilometersAway*milesPerKilometer
    let hours:number=milesAway/speedMph
    return hours/24


}

console.log(getDaysToLocation(250000000))

interface NaveEspacial{
    name:string,
    SpeedMPH:number,

}
function getDaysToLocationCraft(nave:NaveEspacial,kilometersAway:number):string{

    let milesAway:number=kilometersAway*milesPerKilometer
    let hours:number=milesAway/nave.SpeedMPH
    return  "La Nave " +nave.name + " Se va demorar "+hours/24 +" dias en llegar a esa distancia"


}

let NaveNodriza:NaveEspacial={

    name:"Nodriza",
    SpeedMPH:30000,
}

let Nave2:NaveEspacial={

    name:"Espaciall",
    SpeedMPH:50000,
}
console.log(getDaysToLocationCraft(Nave2,2000000))