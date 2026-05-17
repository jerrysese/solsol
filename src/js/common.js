var _commonScript = document.currentScript;

window.toggleDropdown = function(id) {
    var el = document.getElementById(id);
    if (!el) return;
    var isOpen = el.classList.contains('open');
    document.querySelectorAll('.dropdown.open').forEach(function(d) {
        if (d !== el) d.classList.remove('open');
    });
    if (isOpen) { el.classList.remove('open'); } else { el.classList.add('open'); }
};

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

        // ── .dropdown--fit 트리거 너비를 가장 긴 항목 기준으로 고정 ───
        document.querySelectorAll('.dropdown--fit').forEach(function(dd) {
            var trigger = dd.querySelector('.dropdown__trigger');
            var panel = dd.querySelector('.dropdown__panel');
            if (!trigger || !panel) return;
            panel.style.visibility = 'hidden';
            panel.style.display = 'block';
            var w = panel.offsetWidth;
            panel.style.display = '';
            panel.style.visibility = '';
            if (w > 0) trigger.style.minWidth = w + 'px';
        });

        // ── 커스텀 드롭다운 클릭 외부 닫기 + 항목 선택 ───────
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.dropdown')) {
                document.querySelectorAll('.dropdown.open').forEach(function(d) {
                    d.classList.remove('open');
                });
            }
            if (!e.target.closest('.payment-more')) {
                document.querySelectorAll('.payment-more.open').forEach(function(m) {
                    m.classList.remove('open');
                });
            }
        });

        document.addEventListener('click', function(e) {
            var item = e.target.closest('.dropdown__item');
            if (!item) return;
            var panel = item.closest('.dropdown__panel');
            if (!panel) return;
            var dd = panel.closest('.dropdown');
            if (!dd) return;
            panel.querySelectorAll('.dropdown__item').forEach(function(i) { i.classList.remove('active'); });
            item.classList.add('active');
            var trigger = dd.querySelector('.dropdown__trigger');
            if (trigger) {
                var nodes = trigger.childNodes;
                for (var i = 0; i < nodes.length; i++) {
                    if (nodes[i].nodeType === 3 && nodes[i].textContent.trim()) {
                        nodes[i].textContent = item.textContent.trim();
                        break;
                    }
                }
            }
            dd.classList.remove('open');
        });

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

            // 모바일 드로어 전용 요소를 body에 생성 (PC nav와 완전히 분리)
            // → site-header stacking context 바깥에 위치해 backdrop z-index 간섭 없음
            var mobileDrawer = document.createElement('nav');
            mobileDrawer.className = 'mobile-nav-drawer';
            headerNav.querySelectorAll('.nav-item').forEach(function (item) {
                var clone = item.cloneNode(true);
                var text = clone.textContent.trim();
                var icon = NAV_ICONS[text];
                if (icon) {
                    var span = document.createElement('span');
                    span.className = 'nav-icon';
                    span.innerHTML = icon;
                    clone.insertBefore(span, clone.firstChild);
                }
                mobileDrawer.appendChild(clone);
            });
            document.body.appendChild(mobileDrawer);

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
                mobileDrawer.classList.add('nav-visible');
                showBackdrop();
                hamburger.setAttribute('aria-label', '메뉴 닫기');
            }

            function closeNav() {
                siteHeader.classList.remove('nav-open');
                mobileDrawer.classList.remove('nav-visible');
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

        // 프로필 바 클릭 → 인라인 드롭다운 토글 (모바일)
        if (sidebar && !sidebar.querySelector('.sidebar-profile-toggle')) {
            var sidebarProfile = sidebar.querySelector('.left-sidebar__profile');
            if (sidebarProfile) {
                var chevron = document.createElement('span');
                chevron.className = 'sidebar-profile-toggle';
                chevron.innerHTML = '<svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1.5l5 5 5-5" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
                sidebarProfile.appendChild(chevron);

                sidebarProfile.addEventListener('click', function () {
                    sidebar.classList.toggle('sidebar-expanded');
                });

                // 로그아웃 버튼 클릭이 profile 토글로 전파되지 않도록
                var logoutBtn = sidebar.querySelector('.left-sidebar__logout');
                if (logoutBtn) {
                    logoutBtn.addEventListener('click', function (e) { e.stopPropagation(); });
                }
            }
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
