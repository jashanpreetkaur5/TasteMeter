$(document).ready(function () {
  var searchTerm;
  $("#btnSearch").click(function () {
    // Set the search term
    searchTerm = "";
    if ($("#search").val() == "") {
      alert("You must enter one or more tags!");
    } else {
      searchTerm = $("#search").val();
      // Build the URL based on the search term
      var url =
        "http://api.flickr.com/services/feeds/photos_public.gne?" +
        "format=json&jsoncallback=?&tags=" +
        searchTerm +
        "&tagmode=all";

      $.getJSON(url, function (data) {
        var html = "";
        $.each(data.items, function (i, item) {
          html += "<p>" + item.title + "</p>";
          html +=
            "<img src=" +
            item.media.m +
            " style='display: block; margin: 0 auto;'>";
          //   html += "<p><b>Tags: </b>" + item.tags + "</p>";
        });
        $("#photos").html(html);
      });
    }
  });
  // Get the search input field
  var searchInput = document.getElementById("search");
  // Add an event listener for keypress
  searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      // Trigger the search function
      $("#btnSearch").click();
    }
  });
});
