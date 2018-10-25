// Display a custom message in the console

let g = "font-size:20px; font-weight:bold;";
console.log("%c🖌💻 Site designed and coded with 💖 by Kyle Decker: https://kyledecker.me", g);

$(document).ready(function () {

  //
  // Intro Gifs
  //

  function registerGifEvents() {
    $(".intro-link").on("mouseenter", showGif);
  };

  function getRandomPercentage() {
    // Generate a percentage between 20% and 80%
    return (Math.random() * 60) + 20;
  }

  function showGif() {
    var posX = getRandomPercentage(),
      posY = getRandomPercentage(),
      gifName = $(this).data('gif');

    $('#hover-gifs video[data-gif]').css("opacity", "0");

    $(`#hover-gifs video[data-gif="${gifName}"`).css({
      "transform": `translate3d(calc(${posX}vw - 50%), calc(${posY}vh - 50%), 0)`,
      "opacity": "1"
    })
  };

  registerGifEvents();

  //
  // About Bio
  //

  var $sentences,
    $stepper;

  var ACTIVE_CLASS = "active",
      DEFAULT_STEPPER_VALUE = 3;

  function registerBioEvents() {
    $sentences = $(".bio-item");
    $stepper = $("#bio-stepper");

    $stepper.on("input", function () {
      $sentences.removeClass(ACTIVE_CLASS);
      var $active = $(this).val();
      setActiveSentence($active);
    });

    initStepper();
  }

  function setStepperMax(num) {
    $stepper.attr("max", num);
  }

  function setStepperDefault(num) {
    $stepper.attr("value", num);
  }

  function setActiveSentence(num) {
    $sentences.filter(':nth-child(' + num + ')').addClass(ACTIVE_CLASS);
  }

  function initStepper() {
    setStepperMax($sentences.length);
    setStepperDefault(DEFAULT_STEPPER_VALUE);
    setActiveSentence($stepper.val());
  }

  registerBioEvents();

  //
  // Ticker
  //

  $('.events').marquee({
    duration: 15000,
    gap: 0,
    duplicated: true
  });

  //
  // Fartz
  //

  var $fart = $(".fart");
  $(".letter48").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
  function(e) {
    $fart[0].play();
  });

  $(".fartletter").click(function() {
    $fart[0].play();
  });

  //
  // About
  //

  $(".about-toggle").click(function() {
    $("body").toggleClass("sidebar-open");
  });
});

