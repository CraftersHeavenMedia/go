// ---
// ---
// Test Comment Out
// $(function() {

//   $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
//     preventSubmit: true,
//     submitError: function($form, event, errors) {
//       // additional error messages or events
//     },
//     submitSuccess: function($form, event) {
//       event.preventDefault(); // prevent default submit behaviour
//       // get values from FORM
// 	  var url = "https://formspree.io/" + "{% if site.formspree_form_path %}{{ site.formspree_form_path }}{% else %}{{ site.email }}{% endif %}";
//       var name = $("input#name").val();
//       var email = $("input#email").val();
//       var phone = $("input#phone").val();
//       var message = $("textarea#message").val();
//       var firstName = name; // For Success/Failure Message
//       // Check for white space in name for Success/Fail message
//       if (firstName.indexOf(' ') >= 0) {
//         firstName = name.split(' ').slice(0, -1).join(' ');
//       }
//       $this = $("#sendMessageButton");
//       $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
//       $.ajax({
//         url: url,
//         type: "POST",
// 	dataType: "json",
//         data: {
//           name: name,
//           phone: phone,
//           email: email,
//           message: message
//         },
//         cache: false,

// 		success: function() {
//           // Success message
//           $('#success').html("<div class='alert alert-success'>");
//           $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//             .append("</button>");
//           $('#success > .alert-success')
//             .append("<strong>Your message has been sent. </strong>");
//           $('#success > .alert-success')
//             .append('</div>');
//           //clear all fields
//           $('#contactForm').trigger("reset");
//         },

//         error: function() {
//           // Fail message
//           $('#success').html("<div class='alert alert-danger'>");
//           $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//             .append("</button>");
//           $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that our mail server is down. Please try again later!"));
//           $('#success > .alert-danger').append('</div>');
//           //clear all fields
//           $('#contactForm').trigger("reset");
//         },

//         complete: function() {
//           setTimeout(function() {
//             $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
//           }, 1000);
//         }
//       });
//     },
//     filter: function() {
//       return $(this).is(":visible");
//     },
//   });

//   $("a[data-toggle=\"tab\"]").click(function(e) {
//     e.preventDefault();
//     $(this).tab("show");
//   });
// });

// /*When clicking on Full hide fail/success boxes */
// $('#name').focus(function() {
//   $('#success').html('');
// });

//Test
// $(function() {

//   $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
//     preventSubmit: true,
//     submitError: function($form, event, errors) {
//       // Additional error messages or events
//     },
//     submitSuccess: function($form, event) {
//       event.preventDefault(); // Prevent default submit behaviour
      
//       // Get values from FORM
//       var name = $("input#name").val();
//       var email = $("input#email").val();
//       var phone = $("input#phone").val();
//       var website = $("input#website").val();  // Optional field
//       var firstName = name; // For Success/Failure Message
      
//       // Check for white space in name for Success/Fail message
//       if (firstName.indexOf(' ') >= 0) {
//         firstName = name.split(' ').slice(0, -1).join(' ');
//       }
      
//       $this = $("#sendMessageButton");
//       $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      
//       // Since the form action is handled by Google Apps Script, we don't need custom Ajax handling here
//       // The form will automatically submit to the Google Apps Script Web App URL
      
//       // Success message after Google Apps Script submission
//       $('#success').html("<div class='alert alert-success'>");
//       $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//         .append("</button>");
//       $('#success > .alert-success')
//         .append("<strong>Your message has been sent. </strong>");
//       $('#success > .alert-success')
//         .append('</div>');
      
//       // Clear all fields
//       $('#contactForm').trigger("reset");

//       // Re-enable the submit button after 1 second
//       setTimeout(function() {
//         $this.prop("disabled", false);
//       }, 1000);
//     },
//     filter: function() {
//       return $(this).is(":visible");
//     },
//   });

//   $("a[data-toggle=\"tab\"]").click(function(e) {
//     e.preventDefault();
//     $(this).tab("show");
//   });
// });

// /* When clicking on Full hide fail/success boxes */
// $('#name').focus(function() {
//   $('#success').html('');
// });

//Test2
$(function() {
  $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    preventSubmit: false,
    submitError: function($form, event, errors) {
      // Handle error messages here if needed
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); // Prevent default submit behaviour

      // Get values from FORM
      var name = $("input#name").val();
      var email = $("input#email").val();
      var phone = $("input#phone").val();
      var website = $("input#website").val();  // Optional field
      
      // Prepare a success message
      $('#success').html("<div class='alert alert-success'>");
      $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>");
      $('#success > .alert-success').append("<strong>Your message has been sent. </strong>");
      $('#success > .alert-success').append('</div>');

      // Clear all fields after a delay
      setTimeout(function() {
        $('#contactForm').trigger("reset");
      }, 1000);
    },
    filter: function() {
      return $(this).is(":visible");
    }
  });

  // Clear success message when user focuses on the name field
  $('#name').focus(function() {
    $('#success').html('');
  });
});

//Test 3
// $(function() {

//   $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
//     preventSubmit: true,
//     submitError: function($form, event, errors) {
//       // additional error messages or events
//     },
//     submitSuccess: function($form, event) {
//       event.preventDefault(); // prevent default submit behaviour
//       // get values from FORM
//       var url = "https://script.google.com/macros/s/AKfycbyIwkFIgPNm71VJROAXnsm7J7HOFaMN0H0V3BFkklVGyDE0boPwHslHcfliNrGJj0-pow/exec"; // your Google Apps Script URL
//       var name = $("input#name").val();
//       var email = $("input#email").val();
//       var phone = $("input#phone").val();
//       var message = $("textarea#message").val();
//       var firstName = name; // For Success/Failure Message
//       // Check for white space in name for Success/Fail message
//       if (firstName.indexOf(' ') >= 0) {
//         firstName = name.split(' ').slice(0, -1).join(' ');
//       }
//       $this = $("#sendMessageButton");
//       $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      
//       $.ajax({
//         url: url,
//         type: "POST",
//         dataType: "json",
//         data: {
//           name: name,
//           phone: phone,
//           email: email,
//           website: website
//         },
//         cache: false,

//         success: function() {
//           // Success message
//           $('#success').html("<div class='alert alert-success'>");
//           $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//             .append("</button>");
//           $('#success > .alert-success')
//             .append("<strong>Your message has been sent. </strong>");
//           $('#success > .alert-success')
//             .append('</div>');
//           //clear all fields
//           $('#contactForm').trigger("reset");
//         },

//         error: function() {
//           // Fail message
//           $('#success').html("<div class='alert alert-danger'>");
//           $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//             .append("</button>");
//           $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that our mail server is down. Please try again later!"));
//           $('#success > .alert-danger').append('</div>');
//           //clear all fields
//           $('#contactForm').trigger("reset");
//         },

//         complete: function() {
//           setTimeout(function() {
//             $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
//           }, 1000);
//         }
//       });
//     },
//     filter: function() {
//       return $(this).is(":visible");
//     },
//   });
// });

