$(document).ready(function () {
  function animateHeading() {
    $("#fheading")
      .animate(
        {
          color: "rgb(230, 65, 114)",
          backgroundColor: "#fff",
        },
        1000
      )
      .animate(
        {
          color: "#fff",
          backgroundColor: "rgb(230, 65, 114)",
        },
        1000
      )
      .queue(function () {
        animateHeading();
        $(this).dequeue();
      });
  }

  animateHeading();
});
