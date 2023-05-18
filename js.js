// Tranding Product Slider-start
var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// Tranding Product Slider-end

//Table reservation
/*document.getElementById("reservation-form").addEventListener("submit", function(event) {
  event.preventDefault(); 

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var guests = document.getElementById("guests").value;
  
  var tableNumber = Math.floor(Math.random() * 20) + 1;

  // Display the reservation details to the user
  document.getElementById("selected-date").textContent = date;
  document.getElementById("selected-time").textContent = time;
  document.getElementById("table-number").textContent = tableNumber;

  document.getElementById("reservation-form").reset();
  document.getElementById("reservation-details").style.display = "block";
});*/

//-----------------------------------------------------------------------------
document.getElementById("reservation-form").addEventListener("submit", function(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var guests = document.getElementById("guests").value;

  // Retrieve the last shown table number from localStorage
  var lastTableNumber = parseInt(localStorage.getItem("lastTableNumber"));

  // Generate a new table number that is different from the last one shown
  var tableNumber;
  do {
    tableNumber = Math.floor(Math.random() * 20) + 1;
  } while (tableNumber === lastTableNumber);

  // Store the current table number for future reference
  localStorage.setItem("lastTableNumber", tableNumber.toString());

  // Display the reservation details to the user
  document.getElementById("selected-name").textContent = name;
  document.getElementById("selected-date").textContent = date;
  document.getElementById("selected-time").textContent = time;
  document.getElementById("table-number").textContent = tableNumber;

  // Reset the form fields
  document.getElementById("reservation-form").reset();

  // Show the reservation details
  document.getElementById("reservation-details").style.display = "block";

  // Clear the stored table number after 5 minutes
  setTimeout(function() {
    localStorage.removeItem("lastTableNumber");
  }, 5 * 60 * 1000); // Delay of 5 minutes in milliseconds

});




//-----------------------------------------------------------------------------

//for table resavation information pringt
function printReservationDetails() {
  var printContents = document.getElementById("reservation-details").innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;
  window.print();

  document.body.innerHTML = originalContents;
}