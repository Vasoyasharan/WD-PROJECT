// to get current year
function getYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// nice select
$(document).ready(function() {
  $('select').niceSelect();
});

// date picker For Appointment Form
$(function() {
  $("#inputDate").datepicker({
    autoclose: true,
    todayHighlight: true
  }).datepicker('update', new Date());
});


//  -------------- This Slider Is  Removed From Website To Make It Simpler For Presentation 
// owl carousel slider js 
$('.team_carousel').owlCarousel({
  loop: true,
  margin: 15,
  dots: true,
  autoplay: true,
  navText: [ 
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      margin: 0
    },
    576: {
      items: 2,
    },
    992: {
      items: 3  
    }
  }
})

// Owl Casrosoul Slider End's



// -------------  Code Of Validation Of Contact Form Submission ---------------

  /* document.addEventListener("DOMContentLoaded", function () {
       const contactForm = document.querySelector(".form_container form");
       const sendButton = document.querySelector(".btn_box button");

      sendButton.addEventListener("click", function (e) {
          e.preventDefault(); // Prevent the default form submission

           // Get form input values
           const fullName = document.querySelector("input[type='text'][placeholder='Full Name']").value;
           const email = document.querySelector("input[type='email'][placeholder='Email']").value;
           const phoneNumber = document.querySelector("input[type='text'][placeholder='Phone Number']").value;
         const message = document.querySelector(".message-box").value;


           // Perform form validation
        
           if (fullName.trim() === "" || email.trim() === "" || phoneNumber.trim() === "" || message.trim() === "") {
               // Display error message
               alert("Please fill in all fields before sending the message.");
           } else {
               // Form is valid, display success message
               alert("Your message has been sent successfully!");
               // Optionally, you can reset the form here
               contactForm.reset();
           }
       });
   });          */

                   //  End Of Validation Code
