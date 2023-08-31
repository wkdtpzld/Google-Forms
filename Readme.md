## 구글 폼 클론

---

### 실행 방법

```
npm install
```

```
npm start
```

```
// expo 실행 이후
a -> Android 에뮬레이터 실행
i -> IOS 에뮬레이터 실행

QR Code Scan -> 각 핸드폰에서 실행 가능
```

### React native Expo

npx create-expo-app (Typescript) 생성

### package.json 의존성 추가

- redux, react-redux, redux-toolkit
- react-native-navigation, navigation-stack,
- eslint, eslint config 관련 의존성 주입
- react-native-safe-area-context
- react-native-svg
- react-native-reanimated, react-native-gesture-handler, @gorhom/bottom-sheet
- react-native-draggable-flatList
- react-native-keyboard-aware-scroll-view

### Typescript

- npx 생성 당시 Typescript 생성,
- eslint, tsconfig 설정 추가

### 화면 예시에 나오는 아이콘

- Atom/Icon 컴포넌트로 svg를 추가한 데이터를 IconMap에서 꺼내서 쓸 수 있도록 생성

### 예시 디자인 파일을 제공하지 않고 있습니다.

- GoogleForm 을 모토로 디자인


### 데이터가 필요하다면 Dummy 데이터 생성

- 초기 데이터의 경우 initialState 로 설정

### 예시 사이트
**https://docs.google.com/forms**

----

## 구현 요소

[x] 설문 제목 추가, 편집 / 설문 설명 추가, 편집
- Form 컴포넌트 제작
  - FormBox, FormHeader, FormContent 분리
  - FormSlice 내부 상태관리 Redux 생성


[x] 설문 추가하기 버튼 클릭시 설문 추가
- 단답형 컴포넌트
- 장문형 컴포넌트
- 객관신 질문 컴포넌트
- 체크박스 컴포넌트

Form 컴포넌트 기반으로 여러 유형으로 쪼개서 생성
1. Form (Form 전체 내포)
2. FormBox (UI Component)
3. FormHeader (Header 컴포넌트)
4. FormContent (Content 컴포넌트)
   - FormContentHeader Component
   - FormContent 두 종류 컴포넌트 {(단답형, 장문형), (객관식, 체크박스)}
     - IconComponent 생성
   - FormBottomSheet Component
     - BottomSheet Provider 와 분리하여 사용
   - FormFooter (FormFooter 복사 삭제 필수 등등)

[x] 설문 복사 기능 / 설문 삭제 기능  / 필수 옵션 설정 기능
- FormFooter 복사 / 삭제 / 필수/ 기능 구현

## **추가과제!**

[x] Drag And Drop 기능 구현
- react-native-draggable-flatlist 기반으로 드래그 기능 구현
- FormHeader 위치에 드래그 아이콘을 길게 누를 경우
- OpacityScale 이 내려가며 드래그 가능한 상태로 변경됩니다.

### 주의점

로컬 state가 아닌 redux를 활용하여 글로벌 state로 모든 상태를 관리해주세요.

- Redux-toolkit redux 설계

설문 타입 설정은 구글 설문과 다르게 ActionSheet 로 구성해주세요.

- BottomSheet 사용

---

추가 작업 내용

- DraggableFlatList scrollToIndex 이벤트 추가 ( 하단 컨텐츠 입력시 키보드가 컨텐츠를 가리는 현상이 발생하여 개선 )
- bottomSheetItem createContent 함수 리팩토링 진행 ( if 문 남발로 가독성이 좋지 않아 리팩토링 진행 )
- enum, typeof keys 이 혼합되어 사용되고 있어 변경이 필요하다고 판단되어 typeof keys 로 통일 리팩토링 진행
- bottomSheet Android 높이가 짧을 경우 화면이 안보이는 이슈가 발생하여 바텀시트의 높이를 고정값으로 변경
- globalTheme 의 기본타입의 변경을 혼합으로 변경 리팩토링




