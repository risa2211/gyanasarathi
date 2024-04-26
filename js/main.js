(function ($) {
    "use strict";

    // Function to toggle dark mode
    function toggleDarkMode() {
        let darkModeIcon = document.querySelector('#darkMode-icon');
        darkModeIcon.classList.toggle('bx-sun');
        document.body.classList.toggle('dark-mode');
    }

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // Initiate the wowjs
    new WOW().init();

    // Function for image preview
    function previewImage(imageSrc) {
        $.magnificPopup.open({
            items: {
                src: imageSrc
            },
            type: 'image'
        });
    }

    // Function for prompting to open the link
    function promptToOpenLink(url) {
        if (confirm("Do you want to open the link?")) {
            window.open(url, '_blank');
        }
    }

    $(document).ready(function () {
        var navbar = $("#mainNavbar");

        $(window).scroll(function () {
            console.log("ScrollTop: ", $(this).scrollTop()); // Add this line for debugging
    
            if ($(this).scrollTop() > 50) {
                // Add background color when scrolling
                navbar.addClass("navbar-scrolled");
            } else {
                // Remove background color when at the top
                navbar.removeClass("navbar-scrolled");
            }
        });
        // Portfolio isotope and filter
        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });

        $('#portfolio-flters li').on('click', function () {
            $("#portfolio-flters li").removeClass('active');
            $(this).addClass('active');
            portfolioIsotope.isotope({filter: $(this).data('filter')});
        });

        // Magnific Popup for image preview
        $('.image-container previewable').each(function () {
            $(this).magnificPopup({
                delegate: 'i.bi-eye',
                type: 'image',
                gallery: {
                    enabled: true
                },
                image: {
                    titleSrc: 'title'
                },
                callbacks: {
                    elementParse: function (item) {
                        item.src = item.el.attr('data-src');
                    }
                }
            });
        });
        // Add click event listener for dark mode toggle
        $(document).ready(function () {
            // ... (existing code)

            // Click event for dark mode toggle
            $('#darkMode-icon').click(function () {
                toggleDarkMode();
            });
        });
    });


    
    // Add click event listeners
    $(document).ready(function () {
        // Click event for previewable images
        $('.previewable').click(function () {
            var imageSrc = $(this).find('img').attr('src');
            previewImage(imageSrc);
        });
    
        // Click event for images with links
        $('#previewImage4').click(function () {
            promptToOpenLink('https://www.youtube.com/');
        });
    
        $('#previewImage5').click(function () {
            promptToOpenLink('https://www.youtube.com/');
        });
    
        $('#previewImage6').click(function () {
            promptToOpenLink('https://www.youtube.com/');
        });
    });
    

    // Back to top button
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

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    // Function for image preview
    window.previewImage = function (imageSrc) {
        $.magnificPopup.open({
            items: {
                src: imageSrc
            },
            type: 'image'
        });
    };

})(jQuery);



