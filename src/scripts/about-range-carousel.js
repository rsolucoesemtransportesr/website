(function () {
    function shouldReduceMotion() {
        return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    function initAboutRangeCarousel() {
        var root = document.querySelector('.about__range-splide');
        if (!root || typeof Splide === 'undefined') return;

        var reduceMotion = shouldReduceMotion();

        var splide = new Splide(root, {
            // Desktop (base): 4 itens e comportamento quase estático
            perPage: 4,
            gap: '16px',
            arrows: false,
            pagination: false,
            drag: false,
            autoplay: false,
            type: 'slide',
            rewind: false,
            speed: 400,

            // Mobile: 2 por vez, automático e infinito
            breakpoints: {
                768: {
                    perPage: 2,
                    gap: '12px',
                    drag: true,
                    type: 'loop',
                    autoplay: !reduceMotion,
                    interval: 2500,
                    pauseOnHover: true,
                    pauseOnFocus: true,
                },
            },
        });

        splide.mount();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAboutRangeCarousel);
    } else {
        initAboutRangeCarousel();
    }
})();
