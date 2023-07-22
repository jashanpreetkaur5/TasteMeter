"use strict";
$(document).ready(function () {
  $.fn.highlightMenu = function () {
    console.log("highlightMenu called");
    return this.each(function () {
      var items = $(this).find("a");
      console.log(items);
      items.mouseover(function () {
        $(this).addClass("mouseover");
      });
      items.mouseout(function () {
        $(this).removeClass("mouseover");
      });
    });
  };
  $("nav").highlightMenu();
});
