(function () {
    function initHeroPrize() {
        var root = document.querySelector('[data-hero-prize]');
        if (!root) return;

        var titleEl = root.querySelector('[data-hero-prize-title]');
        var subtitleEl = root.querySelector('[data-hero-prize-subtitle]');
        if (!titleEl || !subtitleEl) return;

        function reveal() {
            if (root.classList.contains('is-prize-revealed')) return;

            titleEl.textContent = 'você ganhou um desconto!';
            subtitleEl.textContent = 'Entre em contato para saber mais';
            root.classList.add('is-prize-revealed');
        }

        root.addEventListener('click', reveal);

        root.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                reveal();
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHeroPrize);
    } else {
        initHeroPrize();
    }
})();
