(function () {
    function initTransportCarousel() {
        var root = document.querySelector('.transport__carousel-splide');
        if (!root || typeof Splide === 'undefined') return;

        var splide = new Splide(root, {
            perPage: 3,
            gap: '16px',
            arrows: false,
            pagination: false,
            drag: true,
            type: 'slide',
            rewind: false,
            speed: 500,
            autoplay: false,
            pauseOnHover: true,
            pauseOnFocus: true,
            breakpoints: {
                768: {
                    perPage: 1,
                    gap: '12px',
                },
            },
        });

        splide.mount();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTransportCarousel);
    } else {
        initTransportCarousel();
    }
})();
