"use strict";
$(document).ready(function () {
  var createSlideshow = function () {
    // private variables and functions
    var timer,
      play = true,
      speed = 2000;
    var nodes = { image: null, caption: null };
    var img = { cache: [], counter: 0 };

    var displayNextImage = function () {
      img.counter = ++img.counter % img.cache.length;
      var image = img.cache[img.counter];
      console.log(nodes.image);
      nodes.image.attr("src", image.src);
    };

    // public methods that have access to private variables and functions
    return {
      loadImages: function (slides) {
        var image;
        for (var i = 0; i < slides.length; i++) {
          image = new Image();
          image.src = "images/" + slides[i].href;
          img.cache.push(image);
        }
        return this;
      },
      startSlideShow: function (image) {
        nodes.image = image;
        timer = setInterval(displayNextImage, speed);
        return this;
      },
    };
  };
  // create the slideshow object
  var slideshow = createSlideshow();

  var slides = [
    { href: "slide1.jpg" },
    { href: "slide2.jpg" },
    { href: "slide3.jpg" },
    { href: "slide4.jpg" },
    { href: "slide5.jpg" },
    { href: "slide6.jpg" },
  ];

  // load images and start slideshow
  slideshow.loadImages(slides).startSlideShow($("#image"));
});
