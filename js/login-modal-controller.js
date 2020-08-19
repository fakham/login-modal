$(document).ready(function () {
  //hide hider and popup_box
  $("#hider").hide();
  $("#login-modal").hide();

  //on click show the hider div and the message
  $("#showpopup").click(function () {
    $("#hider").fadeIn("slow");
    $("#login-modal").fadeIn("slow");
  });
  //on click hide the message and the
  $("#buttonClose").click(function () {
    $("#hider").fadeOut("slow");
    $("#login-modal").fadeOut("slow");
  });
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == document.getElementById("login-modal")) {
      $("#login-modal").fadeOut("slow");
    }
  };
});
