
var dayNames = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday");

// Array of month Names
var monthNames = new Array(

    "January", "February",
    "March", "April",
    "May", "June",
    "July", "August",
    "September",
    "October",
    "November",
    "December");


var now = new Date();
var dayOfTheWeek = now.getDay();
now.setTime(now.getTime() - 0 * 24 * 60 * 60 * 1000);
jQuery('.time_placeholder').append(dayNames[(now.getDay())] + ", " + monthNames[(now.getMonth())] + " " + now.getDate() + ", " + now.getFullYear())
