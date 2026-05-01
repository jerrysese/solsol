# solsol 프론트엔드 퍼블리싱 가이드

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

## CSS 파일 구조
- `css/base.css` — 전체 공통 스타일 (컴포넌트 별 섹션으로 구분)
- Auth 페이지 섹션: `AUTH PAGE`, `AUTH AGREEMENT PAGE`, `AUTH AGREEMENT MODAL`
