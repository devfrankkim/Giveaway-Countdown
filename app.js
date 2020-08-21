const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2020, 7, 24, 12, 30, 0);
console.log(futureDate);

let year = futureDate.getFullYear();
let month = futureDate.getMonth();
let date = futureDate.getDate();
let day = futureDate.getDay();
let hours = futureDate.getHours();
let minutes = futureDate.getMinutes();

month = months[month];
day = weekdays[day];

giveaway.textContent = `giveaway ends on ${day}, ${year} ${month} ${date}  ${hours}:${minutes}PM`;

// (1000 * 1) * 60 = 1 min
// (1000 * 1) * 60 * 60 = 1 hour
// (1000 * 1) * 60 * 60 * 24 = 24 hour
