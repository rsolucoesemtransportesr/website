(function () {
    function initTestimonialsCarousel() {
        var root = document.querySelector('.testimonials__carousel-splide');
        if (!root || typeof Splide === 'undefined') return;

        var section = root.closest('.testimonials__content');
        var prevButton = section && section.querySelector('.testimonials__arrow--prev');
        var nextButton = section && section.querySelector('.testimonials__arrow--next');

        var splide = new Splide(root, {
            perPage: 3,
            gap: '24px',
            arrows: false,
            pagination: false,
            drag: true,
            type: 'slide',
            rewind: false,
            speed: 450,
            autoplay: false,
            pauseOnHover: true,
            pauseOnFocus: true,
            breakpoints: {
                1024: {
                    perPage: 2,
                    gap: '16px',
                },
                768: {
                    perPage: 1,
                    gap: '12px',
                },
            },
        });

        splide.mount();

        if (prevButton) {
            prevButton.addEventListener('click', function () {
                splide.go('<');
            });
        }

        if (nextButton) {
            nextButton.addEventListener('click', function () {
                splide.go('>');
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTestimonialsCarousel);
    } else {
        initTestimonialsCarousel();
    }
})();
