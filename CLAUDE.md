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
| 1 | Figma 캡쳐에 명시된 수치(px, gap, margin 등)를 100% 준수한다. 임의 변경 금지. |
| 2 | HTML 텍스트, 리스트 항목 수, 열/행 수를 Figma 원본 그대로 유지한다. |
| 3 | `docs/patterns.md`에 있는 컴포넌트를 별도 CSS로 재정의하지 않는다. |
| 4 | PC 스타일을 미디어쿼리 밖에서 수정하지 않는다. |
| 5 | `icon/` 폴더 이미지는 반드시 `src/images/`에 복사 후 참조한다. |
| 6 | 버튼 font-weight는 500 고정 (Figma에 600으로 표기되어도 500 적용). |
| 7 | STEP 3 QA 체크리스트를 통과하지 않으면 배포(STEP 4)로 진입하지 않는다. |

---

## 퍼블리싱 파이프라인 요약

세부 절차는 `docs/pipeline.md` 참조.

```
STEP 1  분석    Figma 수치 추출 + 컴포넌트 목록 확인 → 불명확 항목 사용자 확인
STEP 2  구현    HTML/CSS 작성 + 반응형 CSS 작성
STEP 3  QA      자체 검수 체크리스트 전 항목 통과 → 미통과 즉시 수정
STEP 4  배포    git commit + push (master → main 순)
```

---

## 반응형 CSS 규칙

- **브레이크포인트**: 태블릿 `max-width: 1024px` / 모바일 `max-width: 768px`
- 반응형 CSS는 파일 하단 `/* ===== RESPONSIVE ===== */` 섹션에만 작성
- `base.css`에 공통 반응형이 있으면 중복 작성하지 않는다
- 별도 지시가 없어도 PC 퍼블리싱 완료 즉시 반응형 함께 작성

---

## 작업 디렉토리 구조 (퍼블리싱마다 별도 디렉토리 제공)

```
full_screen.jpg          전체 화면 조감 — 반드시 확인
icon/                    아이콘 파일 — src/images/ 복사 후 참조
layout and font/         수치·폰트 캡쳐 이미지 — 수치 100% 추출
```

---

## GitHub 배포 명령어

```bash
git add <파일>
git commit -m "..."
git push origin master
git checkout main
git merge master
git push origin main
git checkout master
```

- GitHub Pages 서비스 브랜치: `main`
- 웹 확인 주소: `https://jerrysese.github.io/solsol/`

---

## CSS 파일 구조

- `css/base.css` — 전체 공통 스타일
- `docs/patterns.md` — 컴포넌트 HTML/CSS 레퍼런스

base.css 주요 섹션:
`AUTH PAGE` / `AUTH AGREEMENT PAGE` / `AUTH AGREEMENT MODAL` /
`EMPTY STATE` / `PAYMENT BADGE` / `COURSE CARD RIBBON` / `DROPDOWN` /
`LEFT SIDEBAR` / `CONTEXT ACTIONS` / `POPUP MODAL` / `TOAST POPUP` / `GOODS CARD`
