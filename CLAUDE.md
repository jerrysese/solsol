# solsol 프론트엔드 퍼블리싱 가이드

## ⚠️ 절대 규칙 — 반드시 준수할 것 ⚠️

**피그마 레이아웃 이미지(layout1.jpg, layout2.jpg ...) 숙지 의무**

- 퍼블리싱 작업 전 `layout1.jpg`, `layout2.jpg` 등으로 제공되는 피그마 캡처 이미지에 표시된 모든 수치(padding, gap, margin, width, height, border-radius 등)를 100% 숙지한 후 작업을 시작한다.
- 이미지에 명시된 수치를 임의로 바꾸거나 누락하는 것은 퍼블리싱 오류로 간주된다.
- 수치가 불명확하거나 보이지 않을 경우 작업 전에 반드시 확인을 요청한다.

---

**텍스트 내용, 항목 개수, 열 수를 절대로 임의로 변경하지 말 것!!!**

- HTML 내 텍스트(라벨, 설명, 버튼명 등)는 디자인 원본(Figma/캡처)에 있는 내용 그대로 사용한다.
- 리스트 항목 개수(예: 혜택 5개)를 임의로 줄이거나 늘리지 않는다.
- 테이블·그리드·카드 등의 열/행 수를 임의로 변경하지 않는다.
- 디자인 원본에 없는 텍스트를 추가하거나, 있는 텍스트를 삭제·교체하지 않는다.
- 변경이 필요하다고 판단되더라도 반드시 먼저 사용자에게 확인을 구한다.
- 이 규칙을 어기는 행위는 퍼블리싱 오류로 간주된다.

---

## 공통 아이콘

| 파일 | 용도 |
|------|------|
| `src/images/ico-check.svg` | 흰색 체크마크 (14×10) — 동의/확인 버튼에 사용 |
| `src/images/x.svg` | X 닫기 아이콘 (17×17, stroke #555555) — 모달 닫기 버튼에 사용 |
| `src/images/ico-chevron-down.svg` | 아래 화살표 (12×8, stroke #888888) — 펼치기 토글에 사용 |
| `src/images/ico-signup.svg` | 회원가입 아이콘 (15×15, fill white) — 회원가입 버튼에 사용 |

## 공통 버튼 패턴

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

## CSS 파일 구조
- `css/base.css` — 전체 공통 스타일 (컴포넌트 별 섹션으로 구분)
- Auth 페이지 섹션: `AUTH PAGE`, `AUTH AGREEMENT PAGE`, `AUTH AGREEMENT MODAL`
