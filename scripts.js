function init() {
    let takeOff = document.getElementById("takeoff");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let landing = document.getElementById("landing");
    let abortMission = document.getElementById("missionAbort");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let left = document.getElementById("left");
    let right = document.getElementById("right");


//   When the "Take off" button is clicked, the following should happen:
    takeOff.addEventListener("click", () =>{

        // A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." If the shuttle is ready for liftoff, then add parts b-d.
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")){
            
            // The flight status should change to "Shuttle in flight."
            document.getElementById("flightStatus").innerHTML="Shuttle in flight.";

            // The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
            document.getElementById("shuttleBackground").style.background="blue";

            // The shuttle height should increase by 10,000 miles.
            document.getElementById("spaceShuttleHeight").innerHTML= 10000;
        };
    });
    
//  When the "Land" button is clicked, the following should happen:
landing.addEventListener("click", () =>{
    
        // A window alert should let the user know "The shuttle is landing. Landing gear engaged."
        window.alert("The shuttle is landing. Landing gear engaged.");

        // The flight status should change to "The shuttle has landed."
        document.getElementById("flightStatus").innerHTML="The shuttle has landed.";

        // The background color of the shuttle flight screen should change from blue to green.
        document.getElementById("shuttleBackground").style.background="green";

        // The shuttle height should go down to 0.   
        document.getElementById("spaceShuttleHeight").innerHTML= 0;
    });   

// When the "Abort Mission" button is clicked, the following should happen:
abortMission.addEventListener("click", () =>{

    // A window confirm should let the user know "Confirm that you want to abort the mission." If the user wants to abort the mission, then add parts b-d.
    if (window.confirm("Confirm that you want to abort the mission.")){
    
        // The flight status should change to "Mission aborted."
        document.getElementById("flightStatus").innerHTML="Mission aborted.";
    
        // The background color of the shuttle flight screen should change from blue to green.
        document.getElementById("shuttleBackground").style.background="green";
    
        // The shuttle height should go to 0.
        document.getElementById("spaceShuttleHeight").innerHTML= 0;
    };

// When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
up.addEventListener("click", () =>{

    // The rocket image should move 10 px in the direction of the button that was clicked.
   
    
    // If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.
});   


}


// Use the window load event to ensure all elements have loaded before attaching event handlers. Remember to pay attention to page loading!
window.onload = init;
