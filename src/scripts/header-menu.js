(function () {
    function initHeaderMenu() {
        var header = document.querySelector('[data-header]');
        if (!header) return;

        var toggle = header.querySelector('[data-header-toggle]');
        var drawer = header.querySelector('[data-header-drawer]');
        if (!toggle || !drawer) return;

        var focusReturnEl = null;

        function setExpanded(isOpen) {
            toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            toggle.querySelector('.header__sr-only').textContent = isOpen ? 'Fechar menu' : 'Abrir menu';
        }

        function openMenu() {
            focusReturnEl = document.activeElement;
            header.classList.add('is-menu-open');
            document.body.classList.add('is-menu-open');
            setExpanded(true);

            var firstLink = drawer.querySelector('a, button, [tabindex]:not([tabindex="-1"])');
            if (firstLink) firstLink.focus();
        }

        function closeMenu() {
            header.classList.remove('is-menu-open');
            document.body.classList.remove('is-menu-open');
            setExpanded(false);

            if (focusReturnEl && typeof focusReturnEl.focus === 'function') {
                focusReturnEl.focus();
            } else {
                toggle.focus();
            }
        }

        function isOpen() {
            return header.classList.contains('is-menu-open');
        }

        toggle.addEventListener('click', function () {
            if (isOpen()) closeMenu();
            else openMenu();
        });

        drawer.addEventListener('click', function (event) {
            var target = event.target;
            if (!target) return;

            if (target.closest && target.closest('a')) {
                closeMenu();
            }
        });

        document.addEventListener('keydown', function (event) {
            if (!isOpen()) return;

            if (event.key === 'Escape') {
                event.preventDefault();
                closeMenu();
            }
        });

        window.addEventListener('resize', function () {
            if (!isOpen()) return;

            // Se o usuário sair do mobile pro desktop, evita ficar preso com scroll travado.
            if (window.matchMedia('(min-width: 901px)').matches) {
                closeMenu();
            }
        });

        setExpanded(false);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHeaderMenu);
    } else {
        initHeaderMenu();
    }
})();
