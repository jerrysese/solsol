var _commonScript = document.currentScript;

(function () {
    var BASE = '';
    if (_commonScript) {
        BASE = _commonScript.src.replace(/\/js\/common\.js.*$/, '');
    }

    document.addEventListener('DOMContentLoaded', function () {

        // ── 1. 헤더 햄버거 버튼 + 우측 드로어 ───────────────
        var siteHeader = document.querySelector('.site-header');
        var headerProfile = document.querySelector('.site-header .header-profile');
        var headerNav = document.querySelector('.site-header .header-nav');

        if (siteHeader && headerProfile && headerNav && !document.querySelector('.header-hamburger')) {

            var hamburger = document.createElement('button');
            hamburger.className = 'header-hamburger';
            hamburger.type = 'button';
            hamburger.setAttribute('aria-label', '메뉴 열기');
            hamburger.innerHTML =
                '<span class="header-hamburger__bar"></span>' +
                '<span class="header-hamburger__bar"></span>' +
                '<span class="header-hamburger__bar"></span>';
            headerProfile.appendChild(hamburger);

            function openNav() {
                siteHeader.classList.add('nav-open');
                hamburger.setAttribute('aria-label', '메뉴 닫기');
            }

            function closeNav() {
                siteHeader.classList.remove('nav-open');
                hamburger.setAttribute('aria-label', '메뉴 열기');
            }

            hamburger.addEventListener('click', function (e) {
                e.stopPropagation();
                siteHeader.classList.contains('nav-open') ? closeNav() : openNav();
            });

            document.addEventListener('click', function (e) {
                if (siteHeader.classList.contains('nav-open') &&
                    !headerNav.contains(e.target) &&
                    !hamburger.contains(e.target)) {
                    closeNav();
                }
            });
        }

        // ── 2. 마이페이지 사이드바 좌측 드로어 ───────────────
        var sidebar = document.querySelector('.left-sidebar');

        if (sidebar && !document.querySelector('.sidebar-close-btn')) {

            function closeSidebar() {
                sidebar.classList.remove('sidebar-open');
            }

            // 사이드바 상단에 닫기 버튼 삽입
            var closeBtn = document.createElement('button');
            closeBtn.className = 'sidebar-close-btn';
            closeBtn.type = 'button';
            closeBtn.setAttribute('aria-label', '메뉴 닫기');
            closeBtn.innerHTML = '✕';
            sidebar.insertBefore(closeBtn, sidebar.firstChild);

            closeBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                closeSidebar();
            });

            // 사이드바 바깥 탭으로 닫기
            document.addEventListener('click', function (e) {
                var toggleBtn = document.querySelector('.sidebar-mobile-toggle');
                if (sidebar.classList.contains('sidebar-open') &&
                    !sidebar.contains(e.target) &&
                    (!toggleBtn || !toggleBtn.contains(e.target))) {
                    closeSidebar();
                }
            });
        }
    });
})();
