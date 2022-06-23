// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl}">
                `

}


function validateInput(testInput) {

    let testNumber = Number(testInput)

    if (testInput === "") {
        return "Empty"
    } else if (isNaN(testNumber) === true) {
        return "Not a Number"
    } else if (isNaN(testNumber) === false) {
        return "Is a Number"
    }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let pilotInput = validateInput(pilot);
    let copilotInput = validateInput(copilot);
    let fuelLevelInput = validateInput(fuelLevel);
    let cargoMassInput = validateInput(cargoLevel);


    if (pilotInput === "Empty" || copilotInput === "Empty" || fuelLevelInput === "Emtpy" || cargoMassInput === "Empty") {
        alert("All field are required");
    }

    else if (pilotInput === "Is a Number" || copilotInput === "Is a Number") {
        alert("Please enter a Name for Pilot and Copilot");
    }

    else if (fuelLevelInput === "Not a Number" || cargoMassInput === "Not a Number") {
        alert("Please enter a number for fuel level and cargo mass");
    }


    else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`;
        copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch.`;

        if (fuelLevel < 10000 && cargoLevel > 10000) {
            list.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            launchStatus.style.color = "red";
            launchStatus.innerHTML = "Shuttle not ready for launch";

        } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
            list.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            launchStatus.style.color = "red";
            launchStatus.innerHTML = "Shuttle not ready for launch";

        } else if (fuelLevel < 10000 && cargoLevel <= 10000) {
            list.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
            launchStatus.style.color = "red";
            launchStatus.innerHTML = "Shuttle not ready for launch";
        }


        else {
            list.style.visibility = "visible";
            launchStatus.style.color = "green";
            launchStatus.innerHTML = "Shuttle is ready for launch";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";

        }

    }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
        .then(function (response) {
            return response.json()
        });

    return planetsReturned;
}

function pickPlanet(planets) {

    let random = Math.floor(Math.random() * planets.length)
    return planets[random];

}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
