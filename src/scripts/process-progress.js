(function () {
    function shouldReduceMotion() {
        return (
            window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        );
    }

    function initProcessProgress() {
        var items = document.querySelectorAll('.process__carousel-item');
        if (!items || !items.length) return;

        if (shouldReduceMotion()) {
            items.forEach(function (el) {
                el.classList.add('is-progress-visible');
            });
            return;
        }

        if (!('IntersectionObserver' in window)) {
            items.forEach(function (el) {
                el.classList.add('is-progress-visible');
            });
            return;
        }

        var observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('is-progress-visible');
                    observer.unobserve(entry.target);
                });
            },
            {
                threshold: 0.45,
            }
        );

        items.forEach(function (el) {
            observer.observe(el);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initProcessProgress);
    } else {
        initProcessProgress();
    }
})();
