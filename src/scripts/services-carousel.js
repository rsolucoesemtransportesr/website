(function () {
    function initServicesCarousel() {
        var root = document.querySelector('.services__carousel-splide');
        if (!root || typeof Splide === 'undefined') return;

        // Usa os botões existentes dentro de .services__controls-div (fora do root)
        var controls = root.parentElement && root.parentElement.querySelector('.services__controls-div');
        var prevButton = controls && controls.querySelector('.splide__arrow--prev');
        var nextButton = controls && controls.querySelector('.splide__arrow--next');

        var splide = new Splide(root, {
            perPage: 3,
            gap: '16px',
            arrows: false,
            pagination: false,
            drag: true,
            type: 'loop',
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
        document.addEventListener('DOMContentLoaded', initServicesCarousel);
    } else {
        initServicesCarousel();
    }
})();
