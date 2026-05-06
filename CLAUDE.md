# solsol 프론트엔드 퍼블리싱 가이드

## 스타일가이드 확인 의무

**퍼블리싱 작업 전 `/src/views/styleguide.html` 반드시 확인**

- 모든 퍼블리싱 작업 시작 전에 `src/views/styleguide.html`을 확인한다.
- 구현할 요소(버튼, 모달, 드롭다운, 배지, 빈 상태 등)가 스타일가이드에 정의되어 있으면 스타일가이드 CSS 클래스와 패턴을 그대로 사용한다.
- 스타일가이드와 겹치는 요소를 별도 CSS로 중복 정의하지 않는다.

---

## CSS 파일 구조
- `css/base.css` — 전체 공통 스타일 (컴포넌트 별 섹션으로 구분)
- Auth 페이지 섹션: `AUTH PAGE`, `AUTH AGREEMENT PAGE`, `AUTH AGREEMENT MODAL`
- 공통 컴포넌트 섹션: `EMPTY STATE`, `PAYMENT BADGE`, `COURSE CARD RIBBON`, `DROPDOWN`, `LEFT SIDEBAR`, `CONTEXT ACTIONS`

---

## 퍼블리싱 페이지마다 알려 주는 작업 디렉토리 안의 정보들 숙지 의무
- 퍼블리싱 페이지마다 별도 작업 디렉토리를 알려 줄 예정.
- 루트에는 전체 화면을 조감할 수 있는 캡쳐화면 `full_screen.jpg`이 있으니 확인 필수
- `icon/` ->관련 이미지, svg 포맷 아이콘 디렉토리 확인
  - **`icon/` 폴더의 이미지(PNG, JPG, SVG 등)는 반드시 `src/images/`에 복사한 후 HTML에서 참조한다. 원본 capture 경로를 HTML에 직접 사용하지 않는다.**
- `layout and font/` -> 화면 레이아웃과 폰트, 스타일 등의 정보를 캡쳐한 이미지 파일
  피그마 캡처 이미지에 표시된 모든 수치(padding, gap, margin, width, height, border-radius 등)를 100% 숙지한 후 작업을 시작한다.
- 이미지에 명시된 수치를 임의로 바꾸거나 누락하는 것은 퍼블리싱 오류로 간주된다.
- 수치가 불명확하거나 보이지 않을 경우 작업 전에 반드시 확인을 요청한다.

---

## 텍스트 내용, 항목 개수, 열 수를 절대로 임의로 변경하지 말 것!!!

- HTML 내 텍스트(라벨, 설명, 버튼명 등)는 디자인 원본(Figma/캡처)에 있는 내용 그대로 사용한다.
- 리스트 항목 개수(예: 혜택 5개)를 임의로 줄이거나 늘리지 않는다.
- 테이블·그리드·카드 등의 열/행 수를 임의로 변경하지 않는다.
- 디자인 원본에 없는 텍스트를 추가하거나, 있는 텍스트를 삭제·교체하지 않는다.
- 변경이 필요하다고 판단되더라도 반드시 먼저 사용자에게 확인을 구한다.

---

## 공통 아이콘

| 파일 | 용도 |
|------|------|
| `src/images/ico-check.svg` | 흰색 체크마크 (14×10) — 동의/확인 버튼에 사용 |
| `src/images/x.svg` | X 닫기 아이콘 (17×17, stroke #555555) — 모달 닫기 버튼에 사용 |
| `src/images/ico-chevron-down.svg` | 아래 화살표 (12×8, stroke #888888) — 펼치기 토글에 사용 |
| `src/images/ico-signup.svg` | 회원가입 아이콘 (15×15, fill white) — 회원가입 버튼에 사용 |

## 공통 버튼 패턴

### 표준 버튼 (150×50px, 3종)
저장하기·글쓰기·바로가기·파일선택 등 모든 액션 버튼은 아래 공통 클래스를 사용한다.

```html
<!-- Primary: 보라 채움 (저장하기, 글쓰기 등) -->
<button class="btn btn--primary" type="button">
    <img src="..." alt="">
    저장하기
</button>

<!-- Outline: 보라 테두리 (바로가기, 이전 등) -->
<button class="btn btn--outline" type="button">
    바로가기
</button>

<!-- Dark: 어두운 채움 (파일선택 등) -->
<button class="btn btn--dark" type="button">
    파일선택
</button>
```

CSS 클래스: `.btn` / `.btn--primary` / `.btn--outline` / `.btn--dark` (base.css 정의)
- 공통: `width 150px`, `height 50px`, `border-radius 5px`, `font-size 17px`, `font-weight 500`
- Primary: `background var(--color-primary)`, `color #FFF`
- Outline: `border 1px solid var(--color-primary)`, `color var(--color-primary)`
- Dark: `background #555`, `color #FFF`

---

### 동의/확인 버튼 (보라색, 전체 너비)
```html
<button class="agree-submit-btn" type="button">
    <img src="../../images/ico-check.svg" alt="" class="agree-submit-ico">
    동의함
</button>
```
CSS 클래스: `.agree-submit-btn` / `.agree-submit-ico` (base.css 정의)
- height: 50px, background: var(--color-primary), font-size: 17px, font-weight: 500, letter-spacing: -1px

### 모달 닫기 버튼
```html
<button class="modal-close" type="button" aria-label="닫기">
    <img src="../../images/x.svg" alt="">
</button>
```

## 공통 검색창 패턴

**기준 페이지: `src/views/live/list.html`** — 모든 페이지의 검색창은 이 디자인을 따른다.

```html
<div class="filter-search">
    <input type="text" class="filter-search__input" placeholder="검색어를 입력해주세요.">
    <button class="filter-search__btn" type="button" aria-label="검색">
        <img src="../../images/ico-search.svg" alt="검색">
    </button>
</div>
```

CSS 클래스: `.filter-search` / `.filter-search__input` / `.filter-search__btn` (base.css 정의)
- 컨테이너: width 460px, height 40px, border 1px solid #DDDDDD, border-radius 5px
- 버튼: 우측 고정, border-left 구분선, ico-search.svg 아이콘

---

## 공통 색상 변수

### 상품 리스트 컬러 (`:root`)
| 변수 | 값 | 용도 |
|------|-----|------|
| `--color-purple` / `--color-purple-bg` | `#7954C6` / `#F8F5FF` | 일반강의, 보라 계열 |
| `--color-blue` / `--color-blue-bg` | `#2BACF4` / `#F7FBFF` | 패키지상품, 파랑 계열 |
| `--color-red` / `--color-red-bg` | `#FC5758` / `#FFEAEA` | 라이브강의, 빨강 계열 |
| `--color-green` / `--color-green-bg` | `#31AD60` / `#EDF9F2` | 화상강의, 초록 계열 |
| `--color-gray` / `--color-gray-bg` | `#333333` / `#F8F8F8` | 디지털상품, 회색 계열 |

### 아이콘/라인 컬러
- 아이콘 기본색: `#888888`
- 구분선 기본색: `#EEEEEE`

---

## 빈 상태 (Empty State) 패턴

### 전체형 (중앙 정렬)
```html
<div class="empty-state">
    <div class="empty-state__icon">
        <img src="../../images/ico-empty-box.svg" alt="">
    </div>
    <p class="empty-state__title">아직 비어있어요</p>
    <p class="empty-state__desc">조금만 기다려 주세요.<br>알찬 상품으로 채워질 예정이에요.</p>
</div>
```

### 인라인형 (아이콘 + 텍스트 가로 배치)
```html
<div class="empty-inline">
    <div class="empty-inline__icon">
        <img src="../../images/ico-empty.svg" alt="">
    </div>
    <span class="empty-inline__text">구독중인 멤버십이 없어요</span>
</div>
```

CSS 클래스: `.empty-state` / `.empty-state__icon` / `.empty-state__title` / `.empty-state__desc`  
인라인: `.empty-inline` / `.empty-inline__icon` / `.empty-inline__text`

---

## 상품 카드 리본 배지 패턴

상품 카드 썸네일 좌상단에 삼각형 리본으로 상품 유형 표시

```html
<div class="course-card__thumb">
    <div class="course-card__ribbon course-card__ribbon--normal">
        <span>일반강의</span>
    </div>
    <img src="..." alt="">
</div>
```

| 클래스 | 색상 | 상품 유형 |
|--------|------|---------|
| `--normal` | `#7954C6` 보라 | 일반강의 |
| `--live` | `#FC5758` 빨강 | 라이브강의 |
| `--package` | `#2BACF4` 파랑 | 패키지상품 |
| `--digital` | `#555555` 어두운 | 디지털상품 |
| `--video` | `#31AD60` 초록 | 화상강의 |

---

## 결제 상태 배지 패턴

```html
<span class="badge-payment badge-payment--complete">결제완료</span>
<span class="badge-payment badge-payment--fail">결제실패</span>
```

| 클래스 | 의미 |
|--------|------|
| `--complete` | 결제완료 (보라 #7954C6) |
| `--cancel` | 결제취소 (회색 #888) |
| `--fail` | 결제실패 (빨강 #FC5758) |
| `--defer` | 결제유예 (노랑 #FDBE1D) |
| `--unpaid` | 미결제 (주황 #EA9635) |
| `--expired` | 기간만료 (회색 #888) |
| `--card-cancel` | 카드사취소 (회색 #888) |
| `--link` | 영수증보기 (링크 스타일 #BBB) |

---

## 드롭다운 패턴

```html
<div class="dropdown">
    <button class="dropdown__trigger" type="button">
        전체 카테고리
        <img src="../../images/ico-chevron-down.svg" alt="">
    </button>
    <div class="dropdown__panel">
        <div class="dropdown__item active">전체 카테고리</div>
        <div class="dropdown__item">메뉴 3</div>
        <div class="dropdown__item">메뉴 4</div>
    </div>
</div>
```

열기/닫기는 JS로 `.dropdown` 에 `.open` 클래스 토글.

---

## 왼쪽 사이드바 메뉴 패턴

마이페이지 등 좌측 프로필+네비게이션 패널. 너비 280px.

```html
<aside class="left-sidebar">
    <!-- 프로필 -->
    <div class="left-sidebar__profile">
        <div class="left-sidebar__avatar"><img src="..." alt=""></div>
        <div class="left-sidebar__user">
            <span class="left-sidebar__role">학습자</span>
            <span class="left-sidebar__name">홍길동</span>
            <span class="left-sidebar__email">user@example.com</span>
        </div>
        <button class="left-sidebar__logout" type="button">
            <img src="../../images/ico-logout.svg" alt="로그아웃">
        </button>
    </div>
    <!-- 멤버십 바 -->
    <div class="left-sidebar__memberships">
        <a href="#" class="left-sidebar__mem-bar">
            <span class="left-sidebar__mem-name">멤버십</span>
            <span class="left-sidebar__mem-status">구독 전 ›</span>
        </a>
        <a href="#" class="left-sidebar__mem-bar left-sidebar__mem-bar--community">
            <span class="left-sidebar__mem-name">프리미엄 커뮤니티</span>
            <span class="left-sidebar__mem-status">2개 구독중 ›</span>
        </a>
    </div>
    <!-- 통계 -->
    <div class="left-sidebar__stats">
        <div class="left-sidebar__stat">
            <span class="left-sidebar__stat-label">내 상품</span>
            <span class="left-sidebar__stat-value">7</span>
        </div>
        <div class="left-sidebar__stat">
            <span class="left-sidebar__stat-badge">3</span>
            <span class="left-sidebar__stat-label">보유 쿠폰</span>
            <span class="left-sidebar__stat-value">1</span>
        </div>
    </div>
    <!-- 네비게이션 -->
    <nav class="left-sidebar__nav">
        <div class="left-sidebar__nav-group">
            <span class="left-sidebar__nav-group-label">상품 관리</span>
            <a href="#" class="left-sidebar__nav-item active">
                <img src="../../images/ico-bag.svg" alt="">내 상품
            </a>
        </div>
    </nav>
</aside>
```

---