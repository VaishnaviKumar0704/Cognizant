// ========================================
// Exercise 1 - JavaScript Basics
// ========================================

console.log("Welcome to the Local Community Event Portal");

window.onload = function () {
    alert("Welcome to the Community Event Portal!");
};

// ========================================
// Exercise 2 - Variables & Data Types
// ========================================

const eventName = "Music Fest";
const eventDate = "20 July 2026";
let seatsAvailable = 50;

console.log(`Event: ${eventName}`);
console.log(`Date: ${eventDate}`);
console.log(`Seats Available: ${seatsAvailable}`);

// ========================================
// Exercise 3 - Arrays of Events
// ========================================

const events = [
    {
        id: 1,
        name: "Music Fest",
        date: "20 July 2026",
        category: "Music",
        location: "Bhubaneswar",
        seats: 50
    },
    {
        id: 2,
        name: "Coding Workshop",
        date: "25 July 2026",
        category: "Technology",
        location: "KIIT",
        seats: 30
    },
    {
        id: 3,
        name: "Football Tournament",
        date: "28 July 2026",
        category: "Sports",
        location: "Cuttack",
        seats: 0
    },
    {
        id: 4,
        name: "Photography Workshop",
        date: "30 July 2026",
        category: "Workshop",
        location: "Puri",
        seats: 25
    }
];

// Display all events in console

events.forEach(event => {
    console.log(event);
});

// Check registration availability

events.forEach(event => {

    if (event.seats > 0) {
        console.log(`${event.name} - Registration Open`);
    } else {
        console.log(`${event.name} - House Full`);
    }

});

// ========================================
// Exercise 4 - Functions
// ========================================

// Function Declaration

function displayGreeting() {
    console.log("Have a great day!");
}

displayGreeting();

// Function with Parameters

function registerUser(name, event) {

    console.log(`${name} registered for ${event}`);

}

registerUser("Vaishnavi", "Music Fest");

// Arrow Function

const totalSeats = () => {

    let total = 0;

    events.forEach(event => {

        total += event.seats;

    });

    return total;

};

console.log("Total Seats:", totalSeats());

// Closure Example

function registrationCounter() {

    let count = 0;

    return function () {

        count++;

        console.log("Registrations:", count);

    };

}

const counter = registrationCounter();

counter();
counter();
counter();

// ========================================
// Exercise 4 - Scope Example
// ========================================

let city = "Bhubaneswar";

function showCity() {

    console.log(city);

}

showCity();

// ========================================
// Exercise 4 - Try Catch
// ========================================

try {

    console.log(events[10].name);

}

catch (error) {

    console.log("Error:", error.message);

}

// ========================================
// Exercise 5 - Objects & Classes
// ========================================

// Event Object

const communityEvent = {
    id: 5,
    name: "Hackathon",
    date: "10 August 2026",
    category: "Technology",
    location: "KIIT",
    seats: 80
};

console.log("Community Event");
console.log(communityEvent);

// Object.entries()

console.log("Object Entries");

Object.entries(communityEvent).forEach(([key, value]) => {
    console.log(`${key} : ${value}`);
});

// Class

class Event {

    constructor(id, name, date, category, location, seats) {

        this.id = id;
        this.name = name;
        this.date = date;
        this.category = category;
        this.location = location;
        this.seats = seats;

    }

    displayDetails() {

        console.log(
            `${this.name} | ${this.category} | ${this.location} | Seats : ${this.seats}`
        );

    }

}

const techFest = new Event(
    6,
    "Tech Fest",
    "15 August 2026",
    "Technology",
    "KIIT",
    120
);

techFest.displayDetails();


// ========================================
// Exercise 6 - Arrays
// ========================================

// Add Event

events.push(communityEvent);

console.log("After Push");
console.log(events);

// Filter Events

const techEvents = events.filter(event => event.category === "Technology");

console.log("Technology Events");

console.log(techEvents);

// Map Events

const eventNames = events.map(event => event.name);

console.log("Only Event Names");

console.log(eventNames);

// Find Event

const sportsEvent = events.find(event => event.category === "Sports");

console.log(sportsEvent);

// Reduce

const totalAvailableSeats = events.reduce((sum, event) => {

    return sum + event.seats;

}, 0);

console.log("Total Seats :", totalAvailableSeats);


// ========================================
// Exercise 7 - DOM Manipulation
// ========================================

const eventContainer = document.getElementById("events");

function displayEvents(eventList) {

    eventContainer.innerHTML = "";

    eventList.forEach(event => {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `

            <h3>${event.name}</h3>

            <p><strong>Date :</strong> ${event.date}</p>

            <p><strong>Category :</strong> ${event.category}</p>

            <p><strong>Location :</strong> ${event.location}</p>

            <p><strong>Seats :</strong> ${event.seats}</p>

            <button onclick="register('${event.name}')">

                Register

            </button>

        `;

        eventContainer.appendChild(card);

    });

}

displayEvents(events);


// Populate Dropdown

const eventSelect = document.getElementById("eventSelect");

events.forEach(event => {

    let option = document.createElement("option");

    option.value = event.name;

    option.textContent = event.name;

    eventSelect.appendChild(option);

});


// ========================================
// Exercise 8 - Event Handling
// ========================================

// Register Button

function register(eventName) {

    alert(`You selected ${eventName}`);

}

// Load Button

document.getElementById("loadBtn").addEventListener("click", () => {

    displayEvents(events);

});

// Search

document.getElementById("search").addEventListener("keyup", function () {

    let keyword = this.value.toLowerCase();

    let filtered = events.filter(event =>

        event.name.toLowerCase().includes(keyword)

    );

    displayEvents(filtered);

});

// Category Filter

document.getElementById("category").addEventListener("change", function () {

    let category = this.value;

    if (category === "All") {

        displayEvents(events);

    }

    else {

        let filtered = events.filter(event =>

            event.category === category

        );

        displayEvents(filtered);

    }

});

// Registration Form

document.getElementById("registrationForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value;

    const event = eventSelect.value;

    document.getElementById("message").innerHTML =
        `${name}, successfully registered for ${event}!`;

    this.reset();

});

// ========================================
// Exercise 9 - Async JavaScript & Fetch API
// ========================================




// Promise Example

const registrationPromise = new Promise((resolve,reject)=>{

    let success = true;

    if(success){

        resolve("Registration Successful");

    }

    else{

        reject("Registration Failed");

    }

});

registrationPromise
.then(result=>console.log(result))
.catch(error=>console.log(error));



// ========================================
// Exercise 10 - ES6 Features
// ========================================

// Destructuring

const firstEvent = events[0];

const {name,date,location} = firstEvent;

console.log(name);
console.log(date);
console.log(location);


// Spread Operator

const copiedEvents = [...events];

console.log(copiedEvents);


// Rest Parameter

function printEvents(...eventNames){

    console.log(eventNames);

}

printEvents("Music Fest","Hackathon","Workshop");


// Default Parameter

function greetUser(user="Guest"){

    console.log(`Welcome ${user}`);

}

greetUser();

greetUser("Vaishnavi");


// ========================================
// Exercise 11 - Form Validation
// ========================================

const form = document.getElementById("registrationForm");

form.addEventListener("submit",(e)=>{

    const nameInput = document.getElementById("name").value.trim();

    const emailInput = document.getElementById("email").value.trim();

    if(nameInput==="" || emailInput===""){

        e.preventDefault();

        alert("Please fill all fields");

        return;

    }

    if(!emailInput.includes("@")){

        e.preventDefault();

        alert("Invalid Email");

        return;

    }

});



// ========================================
// Exercise 12 - Simulating API POST
// ========================================

async function sendRegistration(){

    const registration={

        name:"Vaishnavi",

        email:"vaishnavi@gmail.com",

        event:"Music Fest"

    };

    console.log("Sending Registration...");

    setTimeout(()=>{

        console.log("Registration Sent Successfully");

        console.log(registration);

    },2000);

}

sendRegistration();



// ========================================
// Exercise 13 - Debugging
// ========================================

console.log("Debugging Started");

events.forEach(event=>{

    console.log(event.name);

});

console.log("Debugging Completed");



// ========================================
// Exercise 14 - Extra Array Methods
// ========================================

// Sort Events

events.sort((a,b)=>a.seats-b.seats);

console.log("Sorted by Seats");

console.log(events);


// Reverse

events.reverse();

console.log("Reverse Order");

console.log(events);


// Some

const seatsAvailableNow = events.some(event=>event.seats>0);

console.log(seatsAvailableNow);


// Every

const allEventsAvailable = events.every(event=>event.seats>0);

console.log(allEventsAvailable);


// Includes

const categories = events.map(event=>event.category);

console.log(categories.includes("Music"));


// ========================================
// End of Project
// ========================================

console.log("Community Event Portal Loaded Successfully");