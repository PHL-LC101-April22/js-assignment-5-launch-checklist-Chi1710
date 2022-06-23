
// Write your JavaScript code here!

window.addEventListener("load", function () {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let randomPlanet = pickPlanet(listedPlanets);
        console.log(randomPlanet);
        let name = randomPlanet.name;
        let diameter = randomPlanet.diamter;
        let star = randomPlanet.star
        let distance = randomPlanet.distance;
        let moons = randomPlanet.moons;
        let imageUrl = randomPlanet.image;
    
        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)

    })


    let form = this.document.querySelector("form");
    form.addEventListener("submit", function (event) {
        let button = document.querySelector("#formSubmit");

        let pilot = document.querySelector("input[name = pilotName]").value;
        let copilot = document.querySelector("input[name = copilotName]").value;
        let fuelLevel = document.querySelector("input[name = fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name = cargoMass]").value;

        let launchStatus = document.getElementById("launchStatus");
        let list = document.getElementById("faultyItems");
        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById( "copilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");


        event.preventDefault();
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        
       
    });

});
