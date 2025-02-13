$(document).ready(function () { 
  let message = ["FREE STANDARD SHIPPING WITH ADICLUB", "APP-ONLY SALE: 25% OFF"];
  let index = 0;

  setInterval(function () {
    $("#text-box").fadeOut(500, function () {
      $(this).text(message[index]).fadeIn(500); // Corrected order
    });
    index = (index + 1) % message.length; // Dynamic length
  }, 1500);

  let lastScroll = 0;
  const nav = $('#navbar');

  $(window).on('scroll', function () { 
    const currentScroll = $(this).scrollTop();
    if (currentScroll === 0) {
        // Always show the navbar at the very top
      nav.css('transform', 'translateY(0)');
      nav.css('transition', 'transform .5s ease-in-out');
    } else if (currentScroll > lastScroll) {
        // Scrolling Down - Hide Navbar
      nav.css('transform', 'translateY(-100%)'); // Hides navbar smoothly
      nav.css('transition', 'transform .5s ease-in-out');
    } else {
        // Scrolling Up - Show Navbar
      nav.css('transform', 'translateY(0)');
      nav.css('transition', 'transform .5s ease-in-out');
    }
    lastScroll = currentScroll;
  });
  $("#content-5").mCustomScrollbar({
    theme: "dark-thin"
  });
});

// Correct console.log usage
console.log(jQuery); 
