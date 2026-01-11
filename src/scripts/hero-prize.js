(function () {
    function initHeroPrize() {
        var root = document.querySelector('[data-hero-prize]');
        if (!root) return;

        var banner = document.querySelector('[data-prize-banner]');
        var heroSection = document.querySelector('.hero__content');

        var titleEl = root.querySelector('[data-hero-prize-title]');
        var subtitleEl = root.querySelector('[data-hero-prize-subtitle]');
        if (!titleEl || !subtitleEl) return;

        var hasRedeemed = false;

        function isPastHero() {
            if (!heroSection) return true;
            return heroSection.getBoundingClientRect().bottom <= 0;
        }

        function setBannerVisible(visible) {
            if (!banner) return;

            if (visible) {
                banner.classList.add('is-visible');
                banner.setAttribute('aria-hidden', 'false');
            } else {
                banner.classList.remove('is-visible');
                banner.setAttribute('aria-hidden', 'true');
            }
        }

        var ticking = false;
        function requestUpdate() {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(function () {
                ticking = false;
                if (!hasRedeemed) return;
                setBannerVisible(isPastHero());
            });
        }

        function reveal() {
            if (root.classList.contains('is-prize-revealed')) return;

            titleEl.textContent = 'Você ganhou um desconto!';
            subtitleEl.textContent = 'Entre em contato para saber mais';
            root.classList.add('is-prize-revealed');

            hasRedeemed = true;
            requestUpdate();
        }

        root.addEventListener('click', reveal);

        root.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                reveal();
            }
        });

        window.addEventListener('scroll', requestUpdate, { passive: true });
        window.addEventListener('resize', requestUpdate);

        setBannerVisible(false);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHeroPrize);
    } else {
        initHeroPrize();
    }
})();
