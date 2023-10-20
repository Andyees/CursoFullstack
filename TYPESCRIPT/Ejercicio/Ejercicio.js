var spacecraftName2 = 'Determination';
var speedMph = 17500;
var kilomitersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
var milestoMars = kilomitersToMars * milesPerKilometer;
var hoursToMars = milestoMars / speedMph;
var daysToMars = hoursToMars / 24;
function getDaysToLocation(kilometersAway) {
    var milesAway = kilometersAway * milesPerKilometer;
    var hours = milesAway / speedMph;
    return hours / 24;
}
console.log(getDaysToLocation(250000000));
function getDaysToLocationCraft(nave, kilometersAway) {
    var milesAway = kilometersAway * milesPerKilometer;
    var hours = milesAway / nave.SpeedMPH;
    return "La Nave " + nave.name + " Se va demorar " + hours / 24 + " dias en llegar a esa distancia";
}
var NaveNodriza = {
    name: "Nodriza",
    SpeedMPH: 30000
};
var Nave2 = {
    name: "Espaciall",
    SpeedMPH: 50000
};
console.log(getDaysToLocationCraft(Nave2, 2000000));
