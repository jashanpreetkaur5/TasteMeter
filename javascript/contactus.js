$(document).ready(function () {
  $("#contact_form").submit(function (event) {
    var error = false;
    var fname = $("#fname").val().trim();
    var lname = $("#lname").val().trim();
    var email = $("#email").val().trim();
    var phone = $("#phone").val().trim();
    var gender = $("input[name='gender']:checked").val();
    var address = $("#address").val().trim();
    var comments = $("#comments").val().trim();
    var reference = $("#reference").val();

    if (fname == "") {
      $("#fname").next().html("Please enter your first name.");
      error = true;
    } else {
      $("#fname").next().html("");
    }

    if (lname == "") {
      $("#lname").next().html("Please enter your last name.");
      error = true;
    } else {
      $("#lname").next().html("");
    }

    if (email == "") {
      $("#email").next().html("Please enter your email address.");
      error = true;
    } else if (!isValidEmail(email)) {
      $("#email").next().html("Please enter a valid email address.");
      error = true;
    } else {
      $("#email").next().html("");
    }

    if (phone == "") {
      $("#phone").next().html("Please enter your phone number.");
      error = true;
    } else if (!isValidPhone(phone)) {
      $("#phone").next().html("Please enter a valid phone number.");
      error = true;
    } else {
      $("#phone").next().html("");
    }

    if (!gender) {
      $(".radio").next().html("Please select your gender.");
      error = true;
    } else {
      $(".radio").next().html("");
    }

    if (address == "") {
      $("#address").next().html("Please enter your address.");
      error = true;
    } else {
      $("#address").next().html("");
    }

    if (comments == "") {
      $("#comments").next().html("Please enter your comments.");
      error = true;
    } else {
      $("#comments").next().html("");
    }

    if (reference == "Select") {
      $("#reference").next().html("Please select your referral source.");
      error = true;
    } else {
      $("#reference").next().html("");
    }

    if (!error) {
      alert("Thanks for Connecting!!");
    } else {
      event.preventDefault();
    }
  });
  function isValidEmail(email) {
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  function isValidPhone(phone) {
    var pattern = /^\d{10}$/;
    return pattern.test(phone);
  }
});
