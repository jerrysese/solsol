# 퍼블리싱 파이프라인

> 모든 퍼블리싱 작업은 아래 4단계를 **순서대로** 완료한다.
> 이전 단계가 완료되지 않으면 다음 단계로 진입하지 않는다.

---

## STEP 1 — 분석 (Design Analysis)

> 목표: 구현 전 설계 정보를 100% 파악한다.

### 필수 확인 항목

- [ ] `full_screen.jpg` 전체 화면 구조 파악
- [ ] `layout and font/` 이미지 전체 열람 — 수치 목록화
- [ ] `icon/` 폴더 아이콘 목록 파악
- [ ] `src/views/styleguide.html` 구현할 컴포넌트 존재 여부 확인
- [ ] `docs/patterns.md` 사용할 패턴 클래스 확인

### 수치 추출 (이 목록 없이 STEP 2 진입 불가)

```
레이아웃
  - 컨테이너 width:
  - 주요 섹션 padding/gap:

타이포그래피
  - 제목 font-size / font-weight / letter-spacing:
  - 본문 font-size / font-weight / color:
  - 보조 font-size / color:

컴포넌트
  - 사용할 patterns.md 클래스 목록:
  - 새로 정의해야 할 클래스 (있을 경우만):
```

### STEP 1 완료 기준

- 모든 수치가 추출되었고 불명확한 항목이 없다
- 불명확한 항목은 작업 전 사용자에게 확인 완료

---

## STEP 2 — 구현 (Implementation)

> 목표: STEP 1 수치와 patterns.md를 기반으로 HTML/CSS를 작성한다.

### HTML 작성 규칙

- [ ] 텍스트는 Figma 원본 그대로 (임의 변경 금지)
- [ ] 항목 개수/열 수 Figma 원본 그대로
- [ ] patterns.md 컴포넌트는 해당 HTML 구조 그대로 복사 사용
- [ ] `icon/` 이미지는 `src/images/`에 복사 후 참조 (원본 경로 직접 참조 금지)

### CSS 작성 규칙

- [ ] patterns.md 클래스를 재정의하지 않음
- [ ] STEP 1에서 추출한 수치를 그대로 사용 (추측/반올림 금지)
- [ ] PC 스타일을 미디어쿼리 밖에서 작성
- [ ] 반응형 섹션은 파일 하단 `/* ===== RESPONSIVE ===== */` 아래에만 작성

### STEP 2 완료 기준

- HTML/CSS 초안 작성 완료
- 반응형 CSS (1024px / 768px) 작성 완료

---

## STEP 3 — QA 검수 (Quality Assurance)

> 목표: 구현 결과물을 Figma 원본과 대조하여 오류를 스스로 발견하고 수정한다.
> **이 단계를 건너뛰고 배포하지 않는다.**

### 레이아웃 검수

- [ ] 컨테이너 width가 Figma와 일치하는가
- [ ] 주요 섹션의 padding / gap / margin이 Figma 수치와 일치하는가
- [ ] 컴포넌트 width / height가 Figma와 일치하는가
- [ ] border-radius가 Figma와 일치하는가

### 타이포그래피 검수

- [ ] 모든 텍스트 font-size가 Figma와 일치하는가
- [ ] font-weight가 Figma와 일치하는가 (단, 버튼은 500 고정)
- [ ] letter-spacing / line-height가 Figma와 일치하는가
- [ ] color가 Figma와 일치하는가

### 컴포넌트 검수

- [ ] patterns.md 컴포넌트를 별도 CSS로 재정의하지 않았는가
- [ ] styleguide의 클래스 구조가 그대로 사용되었는가
- [ ] 아이콘 경로가 `src/images/` 기준인가

### 콘텐츠 검수

- [ ] 텍스트 내용이 Figma 원본과 동일한가
- [ ] 항목 개수 (리스트, 카드 등)가 Figma와 동일한가
- [ ] 열/행 수가 Figma와 동일한가

### 반응형 검수

- [ ] 반응형 CSS가 미디어쿼리 안에서만 작성되었는가
- [ ] PC 스타일을 미디어쿼리 밖에서 수정한 항목이 없는가
- [ ] 1024px 태블릿 대응이 작성되었는가
- [ ] 768px 모바일 대응이 작성되었는가

### STEP 3 완료 기준

- 위 체크리스트 전 항목 통과
- 미통과 항목 발견 시 즉시 수정 후 재검수

---

## STEP 4 — 배포 (Deploy)

> 목표: STEP 3 통과 후 GitHub에 반영한다.

### 배포 명령어 (순서 준수)

```bash
git add <변경된 파일들>
git commit -m "..."
git push origin master
git checkout main
git merge master
git push origin main
git checkout master
```

- `master`에만 push하면 GitHub Pages에 반영되지 않음
- `main` 머지·푸시까지 한 번에 처리
- 웹 확인: `https://jerrysese.github.io/solsol/`

---

## 자주 발생하는 오류 패턴

| 오류 유형 | 증상 | 예방법 |
|-----------|------|--------|
| 수치 무시 | padding/gap이 Figma와 다름 | STEP 1 수치 추출 후 복사 붙여넣기 |
| 패턴 재정의 | 동일 컴포넌트를 새 CSS로 작성 | 작업 전 patterns.md 먼저 확인 |
| 텍스트 변경 | 버튼명, 설명이 임의로 바뀜 | Figma 텍스트 복사 붙여넣기 |
| PC 스타일 오염 | 모바일 대응 중 PC 레이아웃 깨짐 | 모든 모바일 CSS는 미디어쿼리 안에만 |
| 버튼 font-weight | 600으로 잘못 적용 | 버튼은 항상 500 고정 |
| 아이콘 경로 | capture/icon/ 경로 직접 참조 | src/images/ 복사 후 참조 |
