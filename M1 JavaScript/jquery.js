$(document).ready(function () {

    console.log("jQuery Loaded Successfully");

    // Hide Event Card
    $("#hideBtn").click(function () {
        $("#eventBox").hide();
    });

    // Show Event Card
    $("#showBtn").click(function () {
        $("#eventBox").show();
    });

    // Fade In / Fade Out
    $("#fadeBtn").click(function () {
        $("#eventBox").fadeToggle(1000);
    });

    // Change Event Title
    $("#changeTitleBtn").click(function () {
        $("#eventTitle").text("Coding Workshop");
    });

    // Change Text Color
    $("#colorBtn").click(function () {
        $("#eventTitle").css("color", "blue");
    });

    // Add Border
    $("#borderBtn").click(function () {
        $("#eventBox").css({
            "border": "3px solid green",
            "padding": "20px"
        });
    });

    // Append New Event
    $("#addEventBtn").click(function () {

        $("#eventList").append(
            "<li>Photography Workshop</li>"
        );

    });

    // Remove Last Event
    $("#removeEventBtn").click(function () {

        $("#eventList li:last").remove();

    });

    // Double Click
    $("#eventBox").dblclick(function () {

        alert("Event Card Double Clicked");

    });

    // Mouse Hover
    $("#eventBox").hover(

        function () {

            $(this).css("background-color", "#d4edda");

        },

        function () {

            $(this).css("background-color", "white");

        }

    );

});