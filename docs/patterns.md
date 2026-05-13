# 컴포넌트 패턴 레퍼런스

> 모든 퍼블리싱 작업에서 이 파일의 패턴을 그대로 사용한다.
> **별도 CSS로 재정의 금지** — base.css에 이미 정의된 클래스를 중복 작성하지 않는다.

---

## 색상 변수

```css
--color-primary: #7954C6          /* 브랜드 보라 */
--color-purple / --color-purple-bg: #7954C6 / #F8F5FF   /* 일반강의 */
--color-blue   / --color-blue-bg:   #2BACF4 / #F7FBFF   /* 패키지상품 */
--color-red    / --color-red-bg:    #FC5758 / #FFEAEA   /* 라이브강의 */
--color-green  / --color-green-bg:  #31AD60 / #EDF9F2   /* 화상강의 */
--color-gray   / --color-gray-bg:   #333333 / #F8F8F8   /* 디지털상품 */
```

- 아이콘 기본색: `#888888`
- 구분선 기본색: `#EEEEEE`

---

## 공통 아이콘

| 파일 | 용도 |
|------|------|
| `src/images/ico-check.svg` | 흰색 체크마크 (14×10) — 동의/확인 버튼 |
| `src/images/x.svg` | X 닫기 (17×17, stroke #555555) — 모달 닫기 |
| `src/images/ico-chevron-down.svg` | 아래 화살표 (12×8, stroke #888888) — 펼치기 토글 |
| `src/images/ico-signup.svg` | 회원가입 아이콘 (15×15, fill white) |
| `src/images/free-icon-left-white-arrow.svg` | 흰색 왼쪽 화살표 — btn--primary 내 사용 |
| `src/images/free-icon-left-gray-arrow.svg` | 회색 왼쪽 화살표 — 비활성 버튼 |
| `src/images/free-icon-modal-close-x.svg` | 모달 닫기 X — popup-modal 전용 |
| `src/images/free-icon-toast-close-x.svg` | 토스트 닫기 X |
| `src/images/free-icon-cancel-button-x.svg` | 취소 버튼 X |

---

## 버튼 패턴

### 1. 표준 버튼 (150×50px) `.btn`

```html
<!-- Primary: 보라 채움 -->
<button class="btn btn--primary" type="button">
    <img src="../../images/free-icon-left-white-arrow.svg" alt="" style="width:10px;height:9px;flex-shrink:0;">
    저장하기
</button>

<!-- Outline: 보라 테두리 -->
<button class="btn btn--outline" type="button">
    <img src="../../images/free-icon-left-violet-arrow.svg" alt="" style="width:10px;height:9px;flex-shrink:0;">
    이전
</button>

<!-- Dark: 어두운 채움 -->
<button class="btn btn--dark" type="button">파일선택</button>
```

- 공통: `width 150px`, `height 50px`, `border-radius 5px`, `font-size 17px`, `font-weight 500`
- Primary: `background var(--color-primary)`, `color #FFF`
- Outline: `border 1px solid var(--color-primary)`, `color var(--color-primary)`
- Dark: `background #555`, `color #FFF`

---

### 2. 소형 버튼 (70×35px) `.btn-sm`

취소/수정하기/등록하기 등 댓글·입력폼 내 소형 버튼

```html
<button class="btn-sm btn-sm--outline" type="button">취소</button>
<button class="btn-sm btn-sm--fill" type="button">수정하기</button>
<button class="btn-sm btn-sm--fill" type="button">등록하기</button>
<button class="btn-sm" disabled type="button">등록하기</button>
```

---

### 3. 와이드 버튼 (440×50px) `.btn-wide`

상품 상세 구매·참여 등 전체 폭 버튼

```html
<button class="btn-wide" type="button">
    <img src="../../images/free-icon-buy.svg" alt="" style="width:20px;height:15.556px;flex-shrink:0;">구매하기
</button>
<button class="btn-wide" disabled type="button">아직 모집기간이 아닙니다</button>
<button class="btn-wide btn-wide--video" type="button">화상강의 참여하기</button>
<button class="btn-wide btn-wide--live" type="button">라이브 참여하기</button>
<button class="btn-wide btn-wide--purchased" type="button">수료 중</button>
```

---

### 4. 동의/확인 버튼 (전체 너비, 50px)

```html
<button class="agree-submit-btn" type="button">
    <img src="../../images/ico-check.svg" alt="" class="agree-submit-ico">
    동의함
</button>
```

---

### 5. 기타 버튼

```html
<!-- 찜하기 -->
<button class="btn-wish" type="button">
    <img src="../../images/free-icon-violet-heart.svg" alt="" style="width:17px;height:14px;flex-shrink:0;">찜하기
</button>

<!-- 공유하기 -->
<button class="btn-share" type="button">
    <img src="../../images/free-icon-violet-share.svg" alt="" style="width:17px;height:18px;flex-shrink:0;">공유하기
</button>

<!-- 더보기 (100% × 60px) -->
<button class="btn-more" type="button">
    더보기
    <img src="../../images/free-icon-more_view.svg" alt="" style="width:12px;height:auto;">
</button>

<!-- 다운로드 -->
<button class="btn-dl" type="button">
    <img src="../../images/free-icon-violet-download.svg" alt="" style="width:12px;height:14px;flex-shrink:0;">다운로드
</button>
<button class="btn-dl-all" type="button">
    <img src="../../images/free-icon-violet-download.svg" alt="" style="width:12px;height:14px;flex-shrink:0;">한번에 다운로드
</button>

<!-- 복사 -->
<button class="btn-copy" type="button">
    <img src="../../images/free-icon-violet-copy.svg" alt="" style="width:13px;height:13px;flex-shrink:0;">복사
</button>

<!-- 문의하기 제출 (활성) -->
<button class="btn btn--primary" type="button">
    <img src="../../images/free-icon-left-white-arrow.svg" alt="" class="inquiry-submit-arrow">문의하기
</button>
<!-- 문의하기 제출 (비활성 — 본문 미입력) -->
<button class="btn btn--primary inquiry-submit-btn--inactive" type="button">
    <img src="../../images/free-icon-left-gray-arrow.svg" alt="" class="inquiry-submit-arrow">문의하기
</button>
```

---

## 배지 패턴

### 역할 배지 `.review-badge`

```html
<span class="review-badge review-badge--instructor">강사</span>
<span class="review-badge review-badge--learner">학습자</span>
<span class="review-badge review-badge--admin">운영자</span>
```

- `--instructor`: 보라 `#7954C6 / #F8F5FF`
- `--learner`: 회색 계열
- `--admin`: 핑크 계열

### 상품 카드 리본 배지 `.course-card__ribbon`

```html
<div class="course-card__thumb">
    <div class="course-card__ribbon course-card__ribbon--normal"><span>일반강의</span></div>
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

### 결제 상태 배지 `.badge-payment`

```html
<span class="badge-payment badge-payment--complete">결제완료</span>
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

## 검색창 패턴

기준 페이지: `src/views/live/list.html`

```html
<div class="filter-search">
    <input type="text" class="filter-search__input" placeholder="검색어를 입력해주세요.">
    <button class="filter-search__btn" type="button" aria-label="검색">
        <img src="../../images/ico-search.svg" alt="검색">
    </button>
</div>
```

- 컨테이너: `width 460px`, `height 40px`, `border 1px solid #DDDDDD`, `border-radius 5px`

---

## 빈 상태 (Empty State) 패턴

### 전체형

```html
<div class="empty-state">
    <div class="empty-state__icon">
        <img src="../../images/free-icon-box-x.svg" alt="">
    </div>
    <p class="empty-state__title">아직 비어있어요</p>
    <p class="empty-state__desc">조금만 기다려 주세요.<br>알찬 상품으로 채워질 예정이에요.</p>
</div>
```

### 인라인형

```html
<div class="empty-inline">
    <div class="empty-inline__icon">
        <img src="../../images/free-icon-box-x-small.svg" alt="">
    </div>
    <div class="empty-inline__body">
        <span class="empty-inline__title">아직 작성된 후기가 없어요.</span>
        <span class="empty-inline__text">모두에게 도움이 되는 상품 후기를 남겨주세요!</span>
    </div>
</div>
```

- `__title`만 있을 경우 `__body` 안에 `__title`만 사용

---

## 드롭다운 패턴

### 카테고리 드롭다운

```html
<div class="dropdown">
    <button class="dropdown__trigger" type="button">
        전체 카테고리
        <img src="../../images/ico-chevron-down.svg" alt="">
    </button>
    <div class="dropdown__panel">
        <div class="dropdown__item active">전체 카테고리</div>
        <div class="dropdown__item">메뉴명</div>
    </div>
</div>
```

열기/닫기: `.dropdown`에 `.open` 클래스 JS 토글

### 컨텍스트 드롭다운 (수정/삭제 ⋮ 패널)

```html
<!-- 수정 + 삭제 -->
<div class="dropdown--ctx-panel">
    <div class="dropdown--ctx-item">수정</div>
    <div class="dropdown--ctx-item dropdown--ctx-item--delete">삭제</div>
</div>

<!-- 단독 삭제 (1:1문의 등) -->
<div class="dropdown--ctx-panel dropdown--ctx-panel--solo">
    <button class="dropdown--ctx-item dropdown--ctx-item--delete" type="button">삭제</button>
</div>
```

---

## 팝업 모달 패턴

```html
<div class="popup-modal">
    <div class="popup-modal__header">
        <span class="popup-modal__title">타이틀</span>
        <button class="popup-modal__close" type="button" aria-label="닫기">
            <img src="../../images/free-icon-modal-close-x.svg" alt="">
        </button>
    </div>
    <div class="popup-modal__body">
        <div class="popup-modal__content">
            <p class="popup-modal__text">내용...</p>
        </div>
    </div>
    <!-- 버튼 1개 -->
    <div class="popup-modal__footer">
        <button class="popup-modal__btn" type="button">버튼명</button>
    </div>
    <!-- 버튼 2개 (취소 + 확인) -->
    <div class="popup-modal__footer">
        <button class="popup-modal__btn popup-modal__btn--cancel" type="button">
            <img src="../../images/free-icon-cancel-button-x.svg" alt="">취소
        </button>
        <button class="popup-modal__btn popup-modal__btn--confirm" type="button">
            <img src="../../images/ico-check.svg" alt="">확인
        </button>
    </div>
</div>
```

---

## 토스트 팝업 패턴

```html
<div class="toast-popup">
    <img src="../../images/alert-ico-notice-small.svg" alt="" class="toast-popup__icon">
    <span class="toast-popup__text">토스트팝업 내용</span>
    <button class="toast-popup__close" type="button" aria-label="닫기">
        <img src="../../images/free-icon-toast-close-x.svg" alt="">
    </button>
</div>
```

---

## 왼쪽 사이드바 패턴

마이페이지 좌측 프로필+네비게이션 패널. 너비 280px.

```html
<aside class="left-sidebar">
    <div class="left-sidebar__profile">
        <div class="left-sidebar__avatar"><img src="..." alt=""></div>
        <div class="left-sidebar__user">
            <div class="left-sidebar__user-top">
                <span class="left-sidebar__role">학습자</span>
                <span class="left-sidebar__name">홍길동</span>
            </div>
            <span class="left-sidebar__email">user@example.com</span>
        </div>
        <button class="left-sidebar__logout" type="button">
            <img src="../../images/ico-lm-logout.svg" alt="로그아웃">
        </button>
    </div>
    <div class="left-sidebar__divider"></div>
    <div class="left-sidebar__memberships">
        <a href="#" class="left-sidebar__mem-bar">
            <span class="left-sidebar__mem-name">멤버십</span>
            <span class="left-sidebar__mem-status">구독 전 <img src="../../images/ico-lm-arrow.svg" alt=""></span>
        </a>
        <a href="#" class="left-sidebar__mem-bar left-sidebar__mem-bar--community">
            <span class="left-sidebar__mem-name">프리미엄 커뮤니티</span>
            <span class="left-sidebar__mem-status">2개 구독중 <img src="../../images/ico-lm-arrow.svg" alt=""></span>
        </a>
    </div>
    <div class="left-sidebar__stats">
        <div class="left-sidebar__stat">
            <span class="left-sidebar__stat-label">내 상품</span>
            <span class="left-sidebar__stat-value">7</span>
        </div>
        <div class="left-sidebar__stat">
            <span class="left-sidebar__stat-label">보유 쿠폰 <span class="left-sidebar__stat-badge">3</span></span>
            <span class="left-sidebar__stat-value">1</span>
        </div>
    </div>
    <nav class="left-sidebar__nav">
        <div class="left-sidebar__nav-group">
            <span class="left-sidebar__nav-group-label">상품 관리</span>
            <a href="#" class="left-sidebar__nav-item active">
                <img src="../../images/ico-lm-my-goods.svg" alt="">내 상품
            </a>
        </div>
    </nav>
</aside>
```
