$(document).ready(function () {
  //   $("#about p").hide();
  // $("#about h2").hover(
  //   function () {
  //     $("#about p").animate(
  //       {
  //         width: "toggle",
  //         paddingLeft: "10px",
  //       },
  //       1000,
  //       "easeInOutCubic"
  //     );
  //   },
  //   function () {
  //     $("#about p").animate(
  //       {
  //         width: "toggle",
  //         paddingLeft: "0",
  //       },
  //       1000,
  //       "easeInOutCubic"
  //     );
  //   }
  // );
  //-----------------------------------
  $(".section2 h2").hover(
    function () {
      $(".section2 p").slideUp();
    },
    function () {
      $(".section2 p").slideDown();
    }
  );
});
//-----------------------------------
