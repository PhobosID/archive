(function ($) {
    "use strict";

    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    new WOW().init();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    $('a[href^="#"]').click(function () {
        var targetClass = $(this).attr("href").substring(1);
        var $targetDiv = $("." + targetClass);
        $("html, body").animate({ scrollTop: $targetDiv.offset().top }, 800);
        return false;
    });

const textToCopy = "play.mcnity.xyz";

const buttons = document.querySelectorAll('.copy-button');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;

    document.body.appendChild(textarea);

    textarea.select();

    document.execCommand('copy');

    document.body.removeChild(textarea);

    button.innerText = 'IP Address Copied!';
    button.disabled = true;

    setTimeout(function() {
      button.innerText = 'PLAY.mcnity.xyz';
      button.disabled = false;
    }, 2000);
  });
});

document.addEventListener("DOMContentLoaded",function(){try{var t=document.querySelector(".comparisonTableContainer");if(t){var e=t.querySelectorAll(".comp-table__tableBodyRow .comp-table__tableData"),l=t.querySelector("tbody"),o=t.querySelector("thead"),n=t.querySelectorAll(".comp-table__columnHeader"),r=o.querySelector(".comp-table__columnHeaders");o.querySelectorAll(".comp-table__columnHeader:not(.comp-table__emptyCell)");var i=t.querySelector(".horizontal-scroller"),s=i.querySelector(".horizontal-scroller-content");function a(){var e,n,a,u,m=t.getBoundingClientRect(),g=o.getBoundingClientRect(),y=l.getBoundingClientRect();r.getBoundingClientRect(),i.style.left=m.left+"px",i.style.width=m.width+"px",s.style.width=t.scrollWidth+"px",m.top<=0&&m.height-50>window.innerHeight?(e=m,n=g,a=y,o.classList.add("stickyHeader"),c(t),d(e),u=parseFloat(getComputedStyle(l).transform.substring(getComputedStyle(l).transform.indexOf("(")+1,getComputedStyle(l).transform.lastIndexOf(")")).split(",")[5]),(0==u||"none"==getComputedStyle(l).transform)&&(l.style.transform="translateY("+o.offsetHeight+"px)",t.style.paddingBottom=o.offsetHeight+"px")):y.top>g.bottom&&f(),m.bottom<=window.innerHeight||m.top>window.innerHeight?i.style.visibility="hidden":m.top<=window.innerHeight&&t.clientWidth<t.scrollWidth&&(i.style.visibility="visible"),m.bottom<=g.bottom&&!Array.from(o.classList).includes("atBottom")?o.classList.add("atBottom"):g.top>=0&&o.classList.remove("atBottom")}function c(t){o.scrollLeft=t.scrollLeft}function d(t){o.style.width=t.width+"px",o.style.left=t.left+"px";for(let l=0;l<n.length;l++)e[l].getBoundingClientRect(),Array.from(o.classList).includes("stickyHeader")?n[l].style.minWidth=getComputedStyle(e[l]).width:n[l].style.minWidth="initial"}function f(){o.classList.remove("stickyHeader"),l.style.transform="translateY(0px)",t.style.paddingBottom="0px"}window.addEventListener("scroll",function(){a()});var u=window.innerWidth;window.addEventListener("resize",function(e){f(),a();var l=t.getBoundingClientRect();e.target.innerWidth<u&&(d(l),u=window.innerWidth)}),t.addEventListener("scroll",function(t){Array.from(o.classList).includes("stickyHeader")&&!Array.from(o.classList).includes("atBottom")&&c(t.target),i.scrollLeft=t.target.scrollLeft}),i.addEventListener("scroll",function(e){Array.from(o.classList).includes("stickyHeader")&&!Array.from(o.classList).includes("atBottom")&&c(e.target),t.scrollLeft=e.target.scrollLeft}),o.addEventListener("scroll",function(e){i.scrollLeft=e.target.scrollLeft,t.scrollLeft=e.target.scrollLeft});var m=t.getBoundingClientRect();d(m),a();var g=document.querySelector(".comp-table_pricingToggle");if(g){var y=g.querySelectorAll("input[name='annual_monthly']");for(let h=0;h<y.length;h++)y[h].addEventListener("change",function(t){for(let e=0;e<n.length;e++){var l=n[e].querySelector(".comp-table__price");l&&(l.innerHTML=l.getAttribute(t.target.value))}})}}}catch(p){console.log(p)}});

})(jQuery);
