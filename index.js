console.log("running...");

let form = document.getElementById("form");
let pass = document.getElementById("pass");

let busNumberElement = document.getElementById("b-number");
let busRouteElement = document.getElementById("b-route");
let busFareElement = document.getElementById("b-fare");
let busStartElement = document.getElementById("b-start");
let busEndElement = document.getElementById("b-end");
let currentTimeElement = document.getElementById("current-time");
let bodyElement = document.getElementById("body");
let qrCode = document.getElementById("qr");
let discount = document.getElementById("discount");

let busNumber;
let busRoute;
let from;
let to;
let fare;
let color;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  form.classList.add("hide");
  pass.classList.remove("hide");

  // Get current date and time
  var currentDate = new Date();

  const twoDigit = (oneDigit) => (oneDigit < 10 ? "0" : "") + oneDigit;

  // Get individual date components
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1; // Month is zero-based
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();

  // Format date and time
  var formattedDate = twoDigit(day) + "-" + twoDigit(month) + "-" + year;
  var formattedTime =
    twoDigit(hours) + ":" + twoDigit(minutes) + ":" + twoDigit(seconds);

  currentTimeElement.innerHTML = formattedDate + " " + formattedTime;

  busNumber = e.target[0].value;
  busRoute = e.target[1].value;
  from = e.target[2].value;
  to = e.target[3].value;
  fare = e.target[4].value;
  color = e.target[5].value;

  busNumberElement.innerHTML = busNumber;
  busRouteElement.innerHTML = busRoute;
  busFareElement.innerHTML = "₹" + fare;
  busStartElement.innerHTML = from;
  busEndElement.innerHTML = to;
  discount.innerHTML = "₹" + ((Number(fare) * 90) / 100).toFixed(1);
  qrCode.style.backgroundColor = color;
  bodyElement.style.backgroundColor = color;
});
