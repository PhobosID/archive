jQuery(function($) {
  "use strict";

  // Back to top button
  var $backToTop = $(".back-to-top");
  $(window).scroll(function() {
    $backToTop.toggle($(this).scrollTop() > 200);
  });
  $backToTop.click(function() {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Sticky Navbar
  var $navBar = $(".nav-bar");
  var $carouselAndHeader = $(".carousel, .page-header");
  $(window).scroll(function() {
    var isNavSticky = $(this).scrollTop() > 90;
    $navBar.toggleClass("nav-sticky", isNavSticky);
    $carouselAndHeader.css("margin-top", isNavSticky ? "73px" : "0");
  });

  // Dropdown on mouse hover
  var $navbarDropdowns = $(".navbar .dropdown");
  function toggleNavbarMethod() {
    $navbarDropdowns.off("mouseover mouseout");
    if ($(window).width() > 992) {
      $navbarDropdowns.on("mouseover", function() {
        $(".dropdown-toggle", this).trigger("click");
      }).on("mouseout", function() {
        $(".dropdown-toggle", this).trigger("click").blur();
      });
    }
  }
  toggleNavbarMethod();
  $(window).resize(toggleNavbarMethod);

  // Testimonials carousel
  $(".testimonials-carousel, .blog-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: { items: 1 },
      576: { items: 1 },
      768: { items: 2 },
      992: { items: 3 }
    }
  });

  // Smooth scroll to anchor
  $('a[href^="#"]').click(function() {
    var targetClass = $(this).attr("href").substring(1);
    var $targetDiv = $("." + targetClass);
    $("html, body").animate({ scrollTop: $targetDiv.offset().top }, 800);
    return false;
  });
});
