# Amondz-Task

> node 버전 v16.16.0에서 작업했습니다.

```javascript
npm install

// develop
npm start

// production
npm run serve
```

<img alt='grid' src='https://user-images.githubusercontent.com/68217675/211202707-701167dd-90c1-4c52-b498-831426f2f7ff.gif'  width="1000">
</div>

- [구글 머티리얼 디자인](https://hyoni-k.tistory.com/121)을 참고하여 UI를 구현 (위 영상)
- 반응형 웹을 구현 Desktop (1025px ~), Tablet (480px ~ 1024px), Mobile ( ~ 480px)

# # 작업 내용 🧑🏻‍💻

- (필수) 상품 등록
  - 이미지 URL, 상품명, 가격, 세일%, 타입 속성 설정
  - 데이터를 LocalStorage에 저장하여, 최신상태를 유지
  - **아이템 추가시 이미지 주소는 unsplash, pixabay 기준으로 진행**
- (필수) 상품 불러오기
  - 상품 목록 페이지 구현
- (필수) 상품 편집
  - 기존에 등록했던 데이터 편집&저장 기능 구현
- (필수) 상품 삭제
  - 기존에 등록했던 상품을 삭제하는 기능 구현
- 검색 결과가 없을때 Empty 처리 구현
- 간단한 전역 state 관리를 위하여 Context API 사용
- antd 라이브러리를 사용하여 CSS 작업을 진행
- react-query를 사용하여 state와 함수의 로직을 최적화하고 코드량과 복잡도를 줄임
- "추가","수정" 구현시 각 input에 validation 기능을 구현
- (최적화) 이미지 CDN을 사용하여 이미지 사이즈를 최적화
  - unsplash, pixabay 기준
- (최적화) 이미지를 사전 로딩하여 LCP를 0.3S 향상 시켰습니다.
- (최적화) 웹팩 분석 도구를 사용하여 번들링된 파일을 분석하고 최적화 하였습니다.
  - 코드 분할을 통하여 불필요한 코드 제거
  - dynamic import를 사용하여 상황에 맞는 런타임에 해당 모듈 로드

## lighthouse production 환경 서비스 측정 평균 99점 (아래 점수 확인)

<div>
<img src="https://user-images.githubusercontent.com/68217675/211207496-fce346d1-3668-47b7-a710-552a7496093b.png" width="1000"></img>
</div>
