var _commonScript = document.currentScript;

(function () {
    var BASE = '';
    if (_commonScript) {
        BASE = _commonScript.src.replace(/\/js\/common\.js.*$/, '');
    }

    document.addEventListener('DOMContentLoaded', function () {

        // ── 1. 헤더 햄버거 버튼 ───────────────────────────────
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

            hamburger.addEventListener('click', function (e) {
                e.stopPropagation();
                var isOpen = siteHeader.classList.toggle('nav-open');
                hamburger.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
            });

            document.addEventListener('click', function (e) {
                if (!siteHeader.contains(e.target)) {
                    siteHeader.classList.remove('nav-open');
                }
            });
        }

        // ── 2. 마이페이지 사이드바 모바일 토글 ───────────────
        var mypageLayout = document.querySelector('.mypage-layout');
        var sidebar = document.querySelector('.left-sidebar');

        if (mypageLayout && sidebar && !document.querySelector('.sidebar-mobile-toggle')) {
            var iconSrc = BASE ? BASE + '/images/ico-chevron-down.svg' : '../images/ico-chevron-down.svg';

            var toggleBtn = document.createElement('button');
            toggleBtn.className = 'sidebar-mobile-toggle';
            toggleBtn.type = 'button';
            toggleBtn.innerHTML =
                '<span>내 메뉴</span>' +
                '<img src="' + iconSrc + '" alt="" class="sidebar-mobile-toggle__icon">';

            mypageLayout.insertBefore(toggleBtn, sidebar);

            toggleBtn.addEventListener('click', function () {
                var isOpen = sidebar.classList.toggle('sidebar-open');
                toggleBtn.classList.toggle('is-open', isOpen);
            });
        }
    });
})();
