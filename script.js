/* ==============================
   MOBILE MENU
================================ */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* ==============================
   CLOSE MOBILE MENU
================================ */

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ==============================
   EVENT BOOKING FORM
================================ */

const eventForm =
    document.getElementById("eventForm");

eventForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;

    const phone =
        document.getElementById("phone").value;

    const eventType =
        document.getElementById("eventType").value;

    const date =
        document.getElementById("date").value;

    const guests =
        document.getElementById("guests").value;

    const location =
        document.getElementById("location").value;

    const budget =
        document.getElementById("budget").value;

    const message =
        document.getElementById("message").value;


    const whatsappMessage =

`Hello Elegance Events!

I would like to enquire about planning an event.

Name: ${name}

Phone: ${phone}

Event Type: ${eventType}

Event Date: ${date}

Number of Guests: ${guests || "Not specified"}

Venue / Location: ${location}

Estimated Budget: ${budget}

Event Requirements:
${message || "Not specified"}

Please contact me to discuss the event.

Thank you!`;


    /* ===================================
       REPLACE THIS WITH CUSTOMER NUMBER
    =================================== */

    const whatsappNumber = "919999999999";


    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(whatsappMessage);


    window.open(
        whatsappURL,
        "_blank"
    );

});


/* ==============================
   PREVENT PAST EVENT DATE
================================ */

const dateInput =
    document.getElementById("date");

const today =
    new Date().toISOString().split("T")[0];

dateInput.min = today;
