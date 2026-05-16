# solsol 퍼블리싱 규칙

## 작업 시작 전 필수 확인 (순서 준수)

1. **`docs/pipeline.md`** — 4단계 파이프라인 확인
2. **`docs/patterns.md`** — 사용할 컴포넌트 패턴 확인
3. **`src/views/styleguide.html`** — 구현 요소 스타일가이드 확인

> 위 3개 파일 확인 없이 코드 작성을 시작하지 않는다.

---

## 절대 규칙 — 위반은 퍼블리싱 오류로 간주

| # | 규칙 |
|---|------|
| 1 | Figma 캡쳐에 명시된 수치(px, gap, margin 등)를 100% 준수한다. 임의 변경 금지. 수치가 불명확하면 작업 전 사용자에게 확인한다. |
| 2 | HTML 텍스트, 리스트 항목 수, 열/행 수를 Figma 원본 그대로 유지한다. |
| 3 | `docs/patterns.md`에 있는 컴포넌트를 별도 CSS로 재정의하지 않는다. |
| 4 | PC 스타일을 미디어쿼리 밖에서 수정하지 않는다. |
| 5 | `icon/` 폴더 이미지는 반드시 `src/images/`에 복사 후 참조한다. |
| 6 | 모든 버튼 컴포넌트(`.btn`, `.btn-sm`, `.btn-wide`, `.btn-wish`, `.btn-share` 등 전체)의 font-weight는 500 고정 (Figma에 600으로 표기되어도 500 적용). |
| 7 | STEP 3 QA 체크리스트를 통과하지 않으면 배포(STEP 4)로 진입하지 않는다. |
| 8 | 새 페이지 추가 시 `/src/views/index.html` 의 해당 섹션에 카드 항목을 반드시 추가한다. |
| 9 | 새 아이콘·이미지 추가 시 `/src/views/images.html` 의 해당 섹션에 항목을 반드시 추가한다. |
| 10 | 새 버튼·UI 요소 추가 시 `/src/views/styleguide.html` 의 적절한 위치에 예시를 반드시 추가한다. |
| 11 | HTML·페이지 파일에 `<style>` 태그나 인라인 `style=""` 속성을 추가하지 않는다. CSS는 `css/base.css`에만 컴포넌트 방식으로 추가한다. |
| 12 | `.mypage-layout`을 포함하는 마이페이지를 제외한 모든 페이지의 body 배경색은 white(`#FFFFFF`)를 유지한다. |

---

## 수정 모드 규칙 (기존 파일 수정 시)

- 수정 대상 파일이 이미 존재하는 경우, 별도 지시가 없어도 `CLAUDE.md`를 먼저 확인하고 규칙에 따라 진행한다.
- 기존 파일의 HTML 구조와 CSS 클래스를 먼저 파악한 후 수정한다.
- 수정 모드에서도 동일하게 STEP 1(분석) → STEP 2(구현) → STEP 3(QA) → STEP 4(배포) 순서를 따른다.

---

## 디렉토리·파일 탐색 규칙

- 작업 디렉토리 탐색은 **사용자에게 묻지 않고 직접 수행**한다.
- 아이콘·이미지·캡쳐 파일 목록 확인, 경로 파악, 파일 존재 여부 확인 모두 자율적으로 탐색한다.
- 탐색 결과 파악 후 작업을 진행한다. 탐색 여부를 사용자에게 보고하거나 허락을 구하지 않는다.
- **탐색 범위는 사용자가 첨부하거나 지정한 경로로 한정**한다. 프로젝트 전체 디렉토리를 임의로 탐색하지 않는다.

---

## 퍼블리싱 파이프라인 요약

세부 절차 및 배포 명령어는 `docs/pipeline.md` 참조.

```
STEP 1  분석    Figma 수치 추출 + 컴포넌트 목록 확인 → 불명확 항목 사용자 확인
STEP 2  구현    HTML/CSS 작성 + 반응형 CSS 작성
STEP 3  QA      자체 검수 체크리스트 전 항목 통과 → 미통과 즉시 수정
STEP 4  배포    git commit + push → docs/pipeline.md STEP 4 명령어 참조
```

---

## 반응형 CSS 규칙

- **브레이크포인트**: 태블릿 `max-width: 1024px` / 모바일 `max-width: 768px`
- 반응형 CSS는 파일 하단 `/* ===== RESPONSIVE ===== */` 섹션에만 작성
- `base.css`의 `/* ===== RESPONSIVE ===== */` 섹션에 이미 정의된 selector는 중복 작성하지 않는다
- 모바일 전용 요소(예: 좌측 메뉴 열림 버튼, 햄버거 메뉴 등)는 PC 기본 스타일에서 `display: none` 처리한다
- 별도 지시가 없어도 PC 퍼블리싱 완료 즉시 반응형 함께 작성

---

## CSS 파일 구조

- `css/base.css` — 전체 공통 스타일
- `docs/patterns.md` — 컴포넌트 HTML/CSS 레퍼런스

base.css 주요 섹션:
`AUTH PAGE` / `AUTH AGREEMENT PAGE` / `AUTH AGREEMENT MODAL` /
`EMPTY STATE` / `PAYMENT BADGE` / `COURSE CARD RIBBON` / `DROPDOWN` /
`LEFT SIDEBAR` / `CONTEXT ACTIONS` / `POPUP MODAL` / `TOAST POPUP` / `GOODS CARD`
