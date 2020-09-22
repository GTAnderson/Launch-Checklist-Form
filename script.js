// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotnameInput = document.querySelector("input[name=pilotName]");
      let copilotnameInput = document.querySelector("input[name=copilotName]");
      let fuellevelInput = document.querySelector("input[name=fuelLevel]");
      let cargomassInput = document.querySelector("input[name=cargoMass]");
      if (pilotnameInput.value === "" || copilotnameInput.value === "" || fuellevelInput.value === "" || cargomassInput.value === "") {
         alert("All fields are required!");
      };
      if (isNaN (pilotnameInput.value) === false || isNaN (copilotnameInput.value) === false) {
         alert("Pilot Name and / or Co-Pilot Name is not a string!");
      };
      if (isNaN (fuellevelInput.value) === true || isNaN (cargomassInput.value) === true) {
         alert("Fuel Level and / or Cargo Mass is not a number!");
      };
      document.getElementById("pilotStatus").innerHTML = `${pilotnameInput.value}`;
      document.getElementById("copilotStatus").innerHTML = `${copilotnameInput.value}`;      
      if (fuellevelInput.value < 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("fuelStatus").innerHTML = `${fuellevelInput.value} L is not enough fuel for the journey.`
         document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch.`
         document.getElementById("launchStatus").style.color = "red";   
      } else if (cargomassInput.value > 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("cargoStatus").innerHTML = `${cargomassInput.value} kg is too much mass for the shuttle to take off.`
         document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch.`
         document.getElementById("launchStatus").style.color = "red";
      } else {
         document.getElementById("launchStatus").innerHTML = `Shuttle is ready for launch.`
         document.getElementById("launchStatus").style.color = "green";
      };
   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/