$(document).ready(function () {
  $("#signup-form").hide();

  $("#login-form a").click(function (e) {
    e.preventDefault();
    $("#login-form").fadeOut(300, function () {
      $("#signup-form").fadeIn(300);
    });
  });

  $("#signup-form a").click(function (e) {
    e.preventDefault();
    $("#signup-form").fadeOut(300, function () {
      $("#login-form").fadeIn(300);
    });
  });

  $(".togglePassword").on("click", function () {
    const passwordField = $(".password");
    const eyeIcon = $(".eyeIcon");

    if (passwordField.attr("type") === "password") {
      passwordField.attr("type", "text");
      eyeIcon.removeClass("bi-eye-slash").addClass("bi-eye"); 
    } else {
      passwordField.attr("type", "password");
      eyeIcon.removeClass("bi-eye").addClass("bi-eye-slash");
    }
  });
});
