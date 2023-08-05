## 클라썸 기술과제

---

### React native Expo

npx create-expo-app (Typescript) 생성

### package.json 의존성 추가

- redux, react-redux, redux-toolkit
- react-native-navigation, navigation-stack,
- eslint, eslint config 관련 의존성 주입

### Typescript

- npx 생성 당시 Typescript 생성,
- eslint, tsconfig 설정 추가

### 화면 예시에 나오는 아이콘은 아직 구현 x


### 예시 디자인 파일을 제공하지 않고 있습니다.


### 데이터가 필요하다면 Dummy 데이터 생성


### 예시 사이트
**https://docs.google.com/forms**

----

## 구현 요소

[ ] 설문 제목 추가, 편집

[ ] 설문 설명 추가, 편집
- Form 컴포넌트 제작
  - FormBox, FormHeader, FormContent 분리
  - FormSlice 내부 상태관리 Redux 생성


[ ] 설문 추가하기 버튼 클릭시 설문 추가
- 단답형 컴포넌트
- 장문형 컴포넌트
- 객관신 질문 컴포넌트
- 체크박스 컴포넌트

[ ] 설문 복사 기능

[ ] 설문 삭제 기능

[ ] 필수 옵션 설정 기능

### 주의점

로컬 state가 아닌 redux를 활용하여 글로벌 state로 모든 상태를 관리해주세요.

설문 타입 설정은 구글 설문과 다르게 ActionSheet 로 구성해주세요.





