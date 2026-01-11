(() => {
    const prefersReducedMotion = () => {
        try {
            return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        } catch {
            return false;
        }
    };

    const initAOS = () => {
        if (!window.AOS) return;

        window.AOS.init({
            offset: 120,
            delay: 0,
            duration: 600,
            easing: 'ease-out',
            once: true,
            mirror: false,
            disable: prefersReducedMotion,
        });

        // Small delayed refresh helps with late layout changes (carousels, images)
        window.setTimeout(() => {
            if (window.AOS) window.AOS.refreshHard();
        }, 60);
    };

    window.addEventListener('DOMContentLoaded', initAOS);
    window.addEventListener('load', () => {
        if (window.AOS) window.AOS.refreshHard();
    });
})();
