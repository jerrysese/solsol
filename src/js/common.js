var _commonScript = document.currentScript;

(function () {
    var BASE = '';
    if (_commonScript) {
        BASE = _commonScript.src.replace(/\/js\/common\.js.*$/, '');
    }

    // nav 메뉴 아이콘 맵 (SVG inline)
    var NAV_ICONS = {
        '회사소개':        '<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="6" width="14" height="10" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M6 6V4.5A3 3 0 0 1 12 4.5V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
        '일반강의':        '<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="3" width="14" height="10" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M6 16h6M9 13v3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
        '라이브강의':      '<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="3" stroke="currentColor" stroke-width="1.5"/><circle cx="9" cy="9" r="6.5" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 2"/></svg>',
        '화상강의':        '<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="1.5" y="4.5" width="11" height="9" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M12.5 7.5L16.5 5.5v7L12.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        '패키지 상품':     '<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="8" width="14" height="8" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M5 8V6a4 4 0 0 1 8 0v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
        '디지털 상품':     '<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="3" y="2" width="12" height="14" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M6 6h6M6 9h6M6 12h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
        '프리미엄 커뮤니티': '<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><polygon points="9,2 11.2,7 16.5,7.6 12.5,11.4 13.7,16.5 9,13.8 4.3,16.5 5.5,11.4 1.5,7.6 6.8,7" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
        '멤버십 상품':     '<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="7" r="3.5" stroke="currentColor" stroke-width="1.5"/><path d="M2 16c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
        '공지사항':        '<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2v1M4.2 4.2l.7.7M2 9h1M4.2 13.8l.7-.7M9 16v-1M13.8 13.8l-.7-.7M16 9h-1M13.8 4.2l-.7.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="9" cy="9" r="3" stroke="currentColor" stroke-width="1.5"/></svg>',
        '1:1문의':         '<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 3h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6l-4 3V4a1 1 0 0 1 1-1z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>'
    };

    document.addEventListener('DOMContentLoaded', function () {

        // ── 공통 백드롭 ───────────────────────────────────
        var backdrop = document.createElement('div');
        backdrop.className = 'drawer-backdrop';
        document.body.appendChild(backdrop);

        function showBackdrop() { backdrop.classList.add('active'); }
        function hideBackdrop() { backdrop.classList.remove('active'); }

        // ── 1. 헤더 햄버거 버튼 + 우측 드로어 ───────────────
        var siteHeader = document.querySelector('.site-header');
        var headerProfile = document.querySelector('.site-header .header-profile');
        var headerNav = document.querySelector('.site-header .header-nav');

        if (siteHeader && headerProfile && headerNav && !document.querySelector('.header-hamburger')) {

            // nav 아이템에 아이콘 삽입
            headerNav.querySelectorAll('.nav-item').forEach(function (item) {
                var text = item.textContent.trim();
                var icon = NAV_ICONS[text];
                if (icon) {
                    var span = document.createElement('span');
                    span.className = 'nav-icon';
                    span.innerHTML = icon;
                    item.insertBefore(span, item.firstChild);
                }
            });

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
                showBackdrop();
                hamburger.setAttribute('aria-label', '메뉴 닫기');
            }

            function closeNav() {
                siteHeader.classList.remove('nav-open');
                hideBackdrop();
                hamburger.setAttribute('aria-label', '메뉴 열기');
            }

            hamburger.addEventListener('click', function (e) {
                e.stopPropagation();
                siteHeader.classList.contains('nav-open') ? closeNav() : openNav();
            });

            backdrop.addEventListener('click', function () {
                if (siteHeader.classList.contains('nav-open')) closeNav();
                if (document.querySelector('.left-sidebar.sidebar-open')) closeSidebar();
            });
        }

        // ── 2. 마이페이지 사이드바 좌측 드로어 ───────────────
        var sidebar = document.querySelector('.left-sidebar');

        function closeSidebar() {
            if (sidebar) {
                sidebar.classList.remove('sidebar-open');
                hideBackdrop();
            }
        }

        if (sidebar && !document.querySelector('.sidebar-close-btn')) {
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
        }

        // 내 메뉴 버튼에 백드롭 연동
        var toggleBtn = document.querySelector('.sidebar-mobile-toggle');
        if (toggleBtn && sidebar) {
            toggleBtn.addEventListener('click', function () {
                if (sidebar.classList.contains('sidebar-open')) {
                    closeSidebar();
                } else {
                    sidebar.classList.add('sidebar-open');
                    showBackdrop();
                }
            });
        }
    });
})();
