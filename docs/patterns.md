# 컴포넌트 패턴 레퍼런스

> HTML 코드 스니펫은 `src/views/styleguide.html` 참조.  
> 이 파일은 브라우저에서 시각으로 확인할 수 없는 정보만 수록한다.  
> **styleguide에 담기 애매한 레이아웃·동작 규칙도 여기에 추가한다.**

---

## 색상 변수 (base.css :root)

| 변수 | 값 | 용도 |
|------|----|------|
| `--color-primary` | `#7954C6` | 브랜드 보라 |
| `--color-primary-bg` | `#F8F5FF` | 보라 배경 |
| `--color-purple` / `--color-purple-bg` | `#7954C6` / `#F8F5FF` | 일반강의 |
| `--color-blue` / `--color-blue-bg` | `#2BACF4` / `#F7FBFF` | 패키지상품 |
| `--color-red` / `--color-red-bg` | `#FC5758` / `#FFEAEA` | 라이브강의 |
| `--color-green` / `--color-green-bg` | `#31AD60` / `#EDF9F2` | 화상강의 |
| `--color-gray` / `--color-gray-bg` | `#333333` / `#F8F8F8` | 디지털상품 |
| `--color-text` | `#333333` | 기본 텍스트 |
| `--color-bg` | `#FFFFFF` | 기본 배경 |

- 아이콘 기본색: `#888888`
- 구분선 기본색: `#EEEEEE`

---

## 컴포넌트 클래스명 참조

### 버튼

| 클래스 | 크기 | 설명 |
|--------|------|------|
| `.btn` + `.btn--primary` | 150×50px | 보라 채움 |
| `.btn` + `.btn--outline` | 150×50px | 보라 테두리 |
| `.btn` + `.btn--dark` | 150×50px | 어두운 채움 |
| `.btn-sm` + `.btn-sm--fill` | 70×35px | 소형 채움 |
| `.btn-sm` + `.btn-sm--outline` | 70×35px | 소형 테두리 |
| `.btn-wide` | 440×50px | 기본 와이드 |
| `.btn-wide--video` | — | 화상강의 (초록) |
| `.btn-wide--live` | — | 라이브 (빨강) |
| `.btn-wide--purchased` | — | 수료 중 |
| `.btn-wish` | — | 찜하기 |
| `.btn-share` | — | 공유하기 |
| `.btn-more` | 100%×60px | 더보기 |
| `.btn-dl` / `.btn-dl-all` | — | 다운로드 |
| `.btn-copy` | — | 복사 |
| `.agree-submit-btn` | 100%×50px | 동의/확인 |
| `.community-load-more-btn` | — | 댓글 더보기 |

> **모든 버튼 `font-weight: 500` 고정** — Figma에 600 표기여도 500 적용

### 배지

| 클래스 | 설명 |
|--------|------|
| `.badge--normal` | 일반강의 (보라) |
| `.badge--live` | 라이브강의 (빨강) |
| `.badge--package` | 패키지상품 (파랑) |
| `.badge--digital` | 디지털상품 (회색) |
| `.badge--video` | 화상강의 (초록) |
| `.review-badge--instructor` | 강사 역할 배지 |
| `.review-badge--learner` | 학습자 역할 배지 |
| `.review-badge--admin` | 운영자 역할 배지 |
| `.badge-payment--complete` | 결제완료 (보라) |
| `.badge-payment--cancel` | 결제취소 (회색) |
| `.badge-payment--fail` | 결제실패 (빨강) |
| `.badge-payment--defer` | 결제유예 (노랑 `#FDBE1D`) |
| `.badge-payment--unpaid` | 미결제 (주황 `#EA9635`) |
| `.badge-payment--expired` | 기간만료 (회색) |
| `.badge-payment--link` | 영수증보기 (링크 스타일 `#BBB`) |

### 리본 배지 (`.course-card__ribbon`)

| 수식어 | 색상 | 유형 |
|--------|------|------|
| `--normal` | `#7954C6` 보라 | 일반강의 |
| `--live` | `#FC5758` 빨강 | 라이브강의 |
| `--package` | `#2BACF4` 파랑 | 패키지상품 |
| `--digital` | `#555555` 어두운 | 디지털상품 |
| `--video` | `#31AD60` 초록 | 화상강의 |

### 기타 컴포넌트

| 클래스 | 설명 |
|--------|------|
| `.empty-state` | 빈 상태 전체형 |
| `.empty-inline` | 빈 상태 인라인형 |
| `.dropdown` / `.dropdown__trigger` / `.dropdown__panel` | 카테고리 드롭다운 (`.open` 토글) |
| `.dropdown--ctx-panel` / `.dropdown--ctx-item` | 컨텍스트 드롭다운 (⋮) |
| `.popup-modal` | 팝업 모달 |
| `.toast-popup` | 토스트 팝업 |
| `.left-sidebar` | 마이페이지 좌측 사이드바 |
| `.comment-mention` | @멘션 보라 강조 (`#7954C6`, 700, 13px) |

---

## 자주 쓰는 아이콘

모든 경로는 `src/images/` 기준.

| 파일명 | 용도 |
|--------|------|
| `ico-check.svg` | 흰색 체크마크 — 동의/확인 버튼 내 |
| `ico-chevron-down.svg` | 아래 화살표 — 드롭다운·더보기 토글 |
| `ico-search.svg` | 검색창 버튼 |
| `free-icon-left-white-arrow.svg` | 흰색 왼쪽 화살표 — `.btn--primary` 내 |
| `free-icon-left-violet-arrow.svg` | 보라 왼쪽 화살표 — `.btn--outline` 내 |
| `free-icon-left-gray-arrow.svg` | 회색 왼쪽 화살표 — 비활성 버튼 |
| `free-icon-modal-close-x.svg` | 모달 닫기 X — `.popup-modal` 전용 |
| `free-icon-toast-close-x.svg` | 토스트 닫기 X |
| `free-icon-cancel-button-x.svg` | 취소 버튼 X — 모달 취소 버튼 내 |
| `free-icon-box-x.svg` | 빈 상태 아이콘 (전체형) |
| `free-icon-box-x-small.svg` | 빈 상태 아이콘 (인라인형) |
| `free-icon-more_view.svg` | `.btn-more` 내 더보기 화살표 |
| `free-icon-violet-heart.svg` | `.btn-wish` 찜하기 |
| `free-icon-violet-share.svg` | `.btn-share` 공유하기 |
| `free-icon-violet-download.svg` | `.btn-dl` 다운로드 |
| `free-icon-violet-copy.svg` | `.btn-copy` 복사 |
| `free-icon-buy.svg` | `.btn-wide` 구매하기 내 |
| `free-icon-add-image.svg` | 댓글 이미지 첨부 버튼 |
| `free-icon-dots-vertical.svg` | ⋮ 컨텍스트 메뉴 트리거 |
| `free-icon-lock.svg` | 비밀글 자물쇠 |
| `alert-ico-notice-small.svg` | `.toast-popup` 아이콘 |
| `ico-lm-logout.svg` | 사이드바 로그아웃 버튼 |
| `ico-lm-arrow.svg` | 사이드바 멤버십 오른쪽 화살표 |

---

## 레이아웃·동작 규칙

### 마이페이지 배경색

```css
/* body 기본 배경은 #FFFFFF */
/* .mypage-layout을 포함한 페이지만 body가 #F8F8F8(회색)으로 자동 전환 */
body:has(.mypage-layout) { background: #F8F8F8; }
```

- 마이페이지 **이외** 모든 페이지의 body는 white(`#FFFFFF`) 유지 (CLAUDE.md 규칙 12)
- `background` 속성을 직접 쓸 필요 없이 `.mypage-layout` 클래스가 있으면 자동 적용됨

### 마이페이지 레이아웃 구조

```
.mypage-layout          ← max-width 1440px, display flex, align-items stretch, gap 30px
  .left-sidebar         ← 고정 너비 280px, 사이드바 높이는 콘텐츠 높이에 자동 맞춤
  .mypage-content       ← flex: 1 0 0, 나머지 너비 자동 채움
```

- `align-items: stretch` 덕분에 `.left-sidebar`가 `.mypage-content` 높이에 자동으로 맞춰짐 — 별도 `height` 지정 불필요
- 사이드바에 높이를 고정값으로 지정하면 레이아웃 깨짐

### 반응형 (마이페이지)

| 브레이크포인트 | `.mypage-layout` 변화 |
|----------------|----------------------|
| `max-width: 1024px` | `flex-direction: column`, 사이드바가 상단에 full-width로 배치 |
| `max-width: 768px` | 사이드바 `.sidebar-mobile-toggle`로 열고 닫는 오버레이 방식으로 전환 |
