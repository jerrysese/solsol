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
        var mypageLayout = document.querySelector('.mypage-layout');
        var sidebar = document.querySelector('.left-sidebar');
        var mypageInner = document.querySelector('.mypage-inner');

        if (mypageLayout && sidebar && mypageInner && !document.querySelector('.sidebar-mobile-toggle')) {
            var iconSrc = BASE ? BASE + '/images/ico-chevron-down.svg' : '../images/ico-chevron-down.svg';

            // 토글 버튼을 mypage-inner 최상단에 삽입
            var toggleBtn = document.createElement('button');
            toggleBtn.className = 'sidebar-mobile-toggle';
            toggleBtn.type = 'button';
            toggleBtn.innerHTML =
                '<span class="sidebar-mobile-toggle__bars">' +
                '<span class="sidebar-mobile-toggle__bar"></span>' +
                '<span class="sidebar-mobile-toggle__bar"></span>' +
                '<span class="sidebar-mobile-toggle__bar"></span>' +
                '</span>' +
                '<span>내 메뉴</span>';
            mypageInner.insertBefore(toggleBtn, mypageInner.firstChild);

            function openSidebar() {
                sidebar.classList.add('sidebar-open');
                toggleBtn.classList.add('is-open');
            }

            function closeSidebar() {
                sidebar.classList.remove('sidebar-open');
                toggleBtn.classList.remove('is-open');
            }

            toggleBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                sidebar.classList.contains('sidebar-open') ? closeSidebar() : openSidebar();
            });

            document.addEventListener('click', function (e) {
                if (sidebar.classList.contains('sidebar-open') &&
                    !sidebar.contains(e.target) &&
                    !toggleBtn.contains(e.target)) {
                    closeSidebar();
                }
            });
        }
    });
})();
