// ==========================================
// HTML5 Exercise 6 - Event Handling
// ==========================================

// Confirm before leaving page
function confirmExit() {
    return "Are you sure you want to leave this page?";
}

// Validate Phone Number
function validatePhone() {

    const phone = document.getElementById("phone").value;

    if (phone.length !== 10 || isNaN(phone)) {
        alert("Enter a valid 10-digit phone number");
    }

}

// Display Event Fee
function showFee() {

    const event = document.getElementById("eventType").value;
    const fee = document.getElementById("fee");

    switch(event){

        case "Music":
            fee.innerHTML = "Registration Fee : ₹500";
            break;

        case "Coding":
            fee.innerHTML = "Registration Fee : ₹300";
            break;

        case "Photography":
            fee.innerHTML = "Registration Fee : ₹400";
            break;

        default:
            fee.innerHTML = "";

    }

}

// Character Counter
function countCharacters(){

    const feedback = document.getElementById("feedback").value;

    document.getElementById("count").innerHTML =
        feedback.length;

}

// Submit Registration Form
function submitForm(){

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if(name==="" || email===""){

        alert("Please fill all required fields.");

        return false;

    }

    document.getElementById("message").innerHTML =
        "Registration Successful!";

    return false;

}

// ==========================================
// HTML5 Exercise 7 - Video Events
// ==========================================

function videoReady(){

    document.getElementById("videoMessage").innerHTML =
        "Video is ready to play.";

}

// ==========================================
// HTML5 Exercise 8 - localStorage & sessionStorage
// ==========================================

// Save User Preference
function savePreference() {

    const eventType = document.getElementById("eventType").value;

    if (eventType === "") {
        alert("Please select an event first.");
        return;
    }

    localStorage.setItem("preferredEvent", eventType);

    sessionStorage.setItem("lastVisit", new Date().toLocaleString());

    alert("Preference Saved!");

}

// Load User Preference
function loadPreference() {

    const preferredEvent = localStorage.getItem("preferredEvent");

    const lastVisit = sessionStorage.getItem("lastVisit");

    if (preferredEvent) {

        alert(
            "Preferred Event: " +
            preferredEvent +
            "\nLast Visit: " +
            lastVisit
        );

    } else {

        alert("No preference found.");

    }

}

// Clear Storage
function clearPreference() {

    localStorage.clear();
    sessionStorage.clear();

    alert("Preferences Cleared.");

}


// ==========================================
// HTML5 Exercise 9 - Geolocation
// ==========================================

function findLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

            showPosition,

            showError

        );

    }

    else {

        document.getElementById("location").innerHTML =
            "Geolocation is not supported.";

    }

}

function showPosition(position) {

    document.getElementById("location").innerHTML =

        "Latitude : " +
        position.coords.latitude +

        "<br>Longitude : " +
        position.coords.longitude;

}

function showError(error) {

    switch(error.code){

        case error.PERMISSION_DENIED:

            document.getElementById("location").innerHTML =
                "Location permission denied.";

            break;

        case error.POSITION_UNAVAILABLE:

            document.getElementById("location").innerHTML =
                "Location unavailable.";

            break;

        case error.TIMEOUT:

            document.getElementById("location").innerHTML =
                "Location request timed out.";

            break;

        default:

            document.getElementById("location").innerHTML =
                "Unknown error occurred.";

    }

}


// ==========================================
// HTML5 Exercise 10 - Debugging
// ==========================================

console.log("HTML5 Community Portal Loaded Successfully");

console.log("Open Chrome Developer Tools (F12)");

console.log("Inspect Elements");

console.log("Check Local Storage");

console.log("Check Session Storage");

console.log("Test Responsive Mode");

console.log("Test Geolocation");


// ==========================================
// End of HTML5 Module
// ==========================================