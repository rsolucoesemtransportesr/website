(function () {
    function initPageLoader() {
        var loader = document.querySelector('[data-page-loader]');
        if (!loader) return;

        var prefersReducedMotion =
            window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        function cleanup() {
            if (loader && loader.parentNode) {
                loader.parentNode.removeChild(loader);
            }
            document.body.classList.remove('is-page-loading');
        }

        if (prefersReducedMotion) {
            cleanup();
            return;
        }

        var cleanedUp = false;
        function safeCleanup() {
            if (cleanedUp) return;
            cleanedUp = true;
            cleanup();
        }

        loader.addEventListener('animationend', function (event) {
            if (event && event.animationName === 'page-loader-exit') {
                safeCleanup();
            }
        });

        // Fallback in case animationend doesn't fire.
        window.setTimeout(safeCleanup, 1100);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPageLoader);
    } else {
        initPageLoader();
    }
})();
