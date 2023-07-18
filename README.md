# typescript
typescript 기초를 정리하는 repository


## ✨목차
#### 1장. [프로젝트 생성](#1장.-프로젝트-생성)

## 1장. 프로젝트 생성

<br />

**create-react-app 공식 사이트 참고**
>npx create-react-app my-app --template typescript>


<br />

**directiry 구조**

```
📦public
 ┣ 📜index.html
 ┣ 📜manifest.json
 ┗ 📜robots.txt
📦src
 ┣ 📜App.css
 ┣ 📜App.test.tsx
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┗ 📜setupTests.ts
📜package-lock.json
📜package.json
📜tsconfig.json  -> script 관련된 옵션 설정. "target":"es6"로 변경 "lib":"es6" 추가
```

<br />
 
**간단한 스토어 만들기 예제**

```javascript
📦src
 ┣ 📂model
 ┃ ┗ 📜Cafe.ts data의 타입을 지정해주는 file
 ┣ 📜App.css
 ┣ 📜App.tsx  코드 작성
 ┣ 📜index.css
 ┣ 📜index.tsx  app을 rendering
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┗ 📜Store.tsx app에서 쓸 component

```

 App.tsx에서 사용할 data 만들기
```

let data: Cafe = {
  name: "pnik dissert",
  category: "dissert",
  address: {
    city: "서울",
    detail: "강남구 테헤란로 480",
    zipCode: 523658,
  },
  menu: [
    { name: "크로플", price: 5000, category: "MEALS" },
    { name: "아메리카노", price: 3000, category: "COFFEE" },
    { name: "치즈 케이크", price: 8000, category: "MEALS" },
  ],
};

const App: React.FC = () => {
 return(
);
}


```

